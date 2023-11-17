import {
  Dialog,
  Portal,
  Text as TextPaper,
  Button
} from "react-native-paper"
import { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

export default class ErrorDialog extends Component { 
  constructor(props) {
    super(props);
  }

  render = () => (
    <Portal>
      <Dialog
        visible={this.props.isVisible}
        onDismiss={this.props.setIsVisible}
      >
        <Dialog.Title style={styles.titl}>
          Try again 😖  
        </Dialog.Title>
        <Dialog.Content>
          {this.props.errors.emailError && (
            <View style={styles.li}>
            <TextPaper style={styles.colorRed}>
              {'\u2022'}
            </TextPaper>
            <TextPaper style={styles.colorRed}>
              {this.props.errors.emailError}
            </TextPaper>
          </View>
          )}
          {this.props.errors.passwordErrors?.map((error, index) => (
            <View key={index} style={styles.li}>
              <TextPaper style={styles.colorRed}>
                {'\u2022'}
              </TextPaper>
              <TextPaper style={styles.colorRed}>
                {error}
              </TextPaper>
            </View>
          ))}
        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={() => {this.props.setIsVisible()}}>Done</Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
}

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
  },
  li: {
    display: "flex",
    flexDirection: "row",
    gap: 3,
    color: "blue",
    marginBottom: 5
  },
  colorRed: {
    color: "red"
  }
});