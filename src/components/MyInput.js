import { Component } from "react";
import {
  // SafeAreaView,
  StyleSheet
} from "react-native";
import { 
  TextInput as PaperTextInput } from 'react-native-paper';

export default class MyInput extends Component{

  constructor(props) {
    super(props);
    this.state = {
      value: ""
    }
  }

  handelValueChange = (newValue) => {
    this.setState({
      value: newValue,
    });
  }

  render() {
    return (
      <PaperTextInput
        label="email"
        secureTextEntry
        onChangeText={this.props.handleChange}
        value={this.props.value}
        mode="outlined"
        style={styles.input}
      />
    );
  };
}

const styles = StyleSheet.create({
  input: {
    marginVertical: 10,
    width: "100%",
  },
});