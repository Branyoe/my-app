import { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  View,
  Switch,
} from 'react-native';
import {
  PaperProvider,
  Button as PaperButton,
  Text as PaperText,
  Appbar as PaperAppbar,
} from 'react-native-paper';
import {
  MyDialog,
  MyInput
} from '../components';

export default class LoginView extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      switchValue: false,
      inputValue: "",
      isDialogVisible: false
    }
  }

  //SetStateMethods
  toggleSwitch = (prevState) => {
    this.setState(({
      switchValue: !prevState
    }))
    // console.warn(!prevState);
  }

  handleInputChange = (newValue) => {
    this.setState({
      textValue: newValue
    });
  }

  setIsDialogVisble = () => { 
    this.setState({
      isDialogVisible: !this.state.isDialogVisible
    });
  }
  
  //Methods
  // showAlert = (alertText) => {
  //   Alert.alert('Input value', alertText, [
  //     {
  //       text: 'Cancel',
  //       onPress: () => console.log('Cancel Pressed'),
  //       style: 'cancel',
  //     },
  //     {text: 'OK', onPress: () => console.log('OK Pressed')},
  //   ]);
  // }

  render() {
    return (
      //Provides the theme to all components
      <PaperProvider> 
        <PaperAppbar.Header> 
          <PaperAppbar.Content title="Practica R1" />
        </PaperAppbar.Header>

        {/* //Main content   */}
        <View style={styles.container}>

          <PaperText variant='headlineLarge'>
            Yoél Hernández
          </PaperText>

          {/* custom component */}
          <MyInput
            handleChange={this.handleInputChange}
            value={this.state.textValue}
          />
          <PaperButton
            mode="contained"
            // onPress={() => this.showAlert(this.state.textValue)}
            onPress={() => this.setIsDialogVisble()}
            title="Lear more"
            accessibilityLabel="Learn more about this purple button"
          >
            See more
          </PaperButton>

          <Switch
            onValueChange={() => this.toggleSwitch(this.state.switchValue)}
            value={this.state.switchValue}
          />

          {/* conditional rendering */}
          {this.state.switchValue && (
              <View>
                <PaperText variant='headlineSmall'>
                  {this.state.switchValue ? "Switch is ON" : "Switch is OFF"}
                </PaperText>
              </View>
            )
          }

          {/* custom component */}
          <MyDialog
            isVisible={this.state.isDialogVisible}
            setIsVisible={this.setIsDialogVisble}
            content={this.state.textValue}
          />
          <StatusBar style="auto" />
        </View>
      </PaperProvider>
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
});
