import { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  View,
  Image
} from 'react-native';
import {
  Button as PaperButton,
  Text as PaperText,
  TextInput,
} from 'react-native-paper';
import {
  MyDialog
} from '../components';
import { splash_png } from "../../assets/favicon.png";

export default class LoginView extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      switchValue: false,
      inputValue: "",
      isDialogVisible: false,
      seePasword: true,
      emailValue: "",
      passwordValue: "",
      dialogMessage: {},
    }
  }

  //SetStateMethods
  toggleSeePasword = (prevState) => {
    this.setState(({
      seePasword: !prevState
    }))
  }

  toggleSwitch = (prevState) => {
    this.setState(({
      switchValue: !prevState
    }))
    // console.warn(!prevState);
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

  setDialogMessage = (message) => {
    this.setState({
      dialogMessage: message
    });
  }

  //methods
  validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  }

  validatePassword = (password) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
  }

  generateDialogMessage = () => {
    let message = "";
    if (!this.validateEmail(this.state.emailValue)) {
      message += "Email is not valid\n";
    }
    if (!this.validatePassword(this.state.passwordValue)) {
      message += "Password is not valid\n";
    }
    return message;
  }

  formValidation = () => {
    let message = this.generateDialogMessage();
    if (message === "") {
      this.setDialogMessage({
        title: "Welcome",
        message: "Login successfull"
      });
    } else {
      this.setDialogMessage({
        title: "Login failed",
        message: message
      });
    }
    this.setIsDialogVisble();
  }

  render() {
    return (
      //Provides the theme to all components

      <View style={styles.container}>

        <Image
          style={{width: 100, height: 100, marginBottom: 50}}
          source={require("../../assets/atom.png")}
        />
        
        <PaperText variant='headlineLarge' style={styles.title}>
          Login
        </PaperText>

        <TextInput
          label="Email"
          onChangeText={this.handleEmailValueChange}
          value={this.state.emailValue}
          mode="outlined"
          style={styles.input}
        />

        <TextInput
          label="Password"
          secureTextEntry={this.state.seePasword}
          onChangeText={this.handlePasswordValueChange}
          value={this.state.passwordValue}
          mode="outlined"
          style={styles.input}
          right={
            <TextInput.Icon
              icon={this.state.seePasword ? "eye" : "eye-off"}
              onPress={() => {
                this.toggleSeePasword(this.state.seePasword);
              }}
            />
          }
        />
        
        <PaperButton
          mode="contained"
          onPress={() => this.formValidation()}
          title="Lear more"
          accessibilityLabel="Learn more about this purple button"
          style={styles.submitButton}
        >
          Login
        </PaperButton>

        <MyDialog
          isVisible={this.state.isDialogVisible}
          setIsVisible={this.setIsDialogVisble}
          content={this.state.dialogMessage}
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
