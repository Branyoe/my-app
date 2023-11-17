import { Component } from "react";
import {
  TextInput,
  Button as PaperButton
} from "react-native-paper";
import {
  StyleSheet,
  View
} from "react-native";
import {
  isValidEmail,
  passwordValidator
} from "../../helpers/FormValidators"

export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seePasword: true
    }
  }

  handleSubmit = () => {
    const emailError = !isValidEmail(this.props.emailValue);
    const passwordErrors = passwordValidator(this.props.passwordValue);

    if (!emailError && Object.keys(passwordErrors).length === 0) {
      this.props.setFormErrors({});
    } else {
      this.props.setFormErrors({
        emailError: emailError && "Email is not valid",
        passwordErrors
      });
    }
  }

  toggleSeePasword = (prevState) => {
    this.setState(({
      seePasword: !prevState
    }))
  }

  render() {
    return (
      <View style={styles.formContainer}>
        <TextInput
          label="Email"
          onChangeText={this.props.handleEmailValueChange}
          value={this.props.emailValue}
          mode="outlined"
          style={styles.input}
        />

        <TextInput
          label="Password"
          secureTextEntry={this.state.seePasword}
          onChangeText={this.props.handlePasswordValueChange}
          value={this.props.passwordValue}
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
          onPress={this.handleSubmit}
          title="Lear more"
          accessibilityLabel="Learn more about this purple button"
          style={styles.submitButton}
        >
          Login
        </PaperButton>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    width: "100%",
  },
  formContainer: {
    width: "100%",
    padding: 20,
    alignItems: "center",
  },
  submitButton: {
    marginTop: 20,
  }
});