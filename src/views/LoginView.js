import { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  View,
  Image
} from 'react-native';
import {
  Text as PaperText,
} from 'react-native-paper';
import { ErrorDialog, LoginForm } from '../components/LoginComponents';

export default class LoginView extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      isDialogVisible: false,
      emailValue: "",
      passwordValue: "",
      formErrors: {}
    }
  }

  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.formErrors !== this.state.formErrors) {
      this.setIsDialogVisble();
    }
  }

  //state setters
  setFormErrors = (newFormErrors) => {
    this.setState({
      formErrors: newFormErrors
    });
  }

  handleEmailValueChange = (newValue) => {
    this.setState({
      emailValue: newValue
    });
  }

  handlePasswordValueChange = (newValue) => {
    this.setState({
      passwordValue: newValue
    });
  }

  setIsDialogVisble = () => { 
    this.setState({
      isDialogVisible: !this.state.isDialogVisible
    });
  }
  
  getLoginFormProps = () => {
    return {
      emailValue: this.state.emailValue,
      passwordValue: this.state.passwordValue,
      handleEmailValueChange: this.handleEmailValueChange,
      handlePasswordValueChange: this.handlePasswordValueChange,
      setFormErrors: this.setFormErrors
    }
  }

  render() {
    return (
      <View style={styles.container}>

        <Image
          style={{width: 100, height: 100, marginBottom: 50, borderRadius: 10}}
          source={require("../../assets/musicLogo.png")}
        />
        
        <PaperText variant='headlineLarge' style={styles.title}>
          Login
        </PaperText>

        <LoginForm {...this.getLoginFormProps()}/>

        <ErrorDialog
          isVisible={this.state.isDialogVisible}
          setIsVisible={this.setIsDialogVisble}
          errors={this.state.formErrors}
        />
        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    gap: 10,
  },
  input: {
    width: "100%",
  },
  submitButton: {
    marginTop: 10,
  },
  title: {
    marginBottom: 10,
  }
});
