import {
  Dialog,
  Portal,
  Text,
  Button
} from "react-native-paper"
import { Component } from "react";

export default class MyDialog extends Component { 
  constructor(props) {
    super(props);
  }

  render = () => (
    <Portal>
      <Dialog
        visible={this.props.isVisible}
        onDismiss={this.props.setIsVisible}
      >
        <Dialog.Title>Yoel</Dialog.Title>
        <Dialog.Content>
          <Text variant="bodyMedium">
            Writed text: {this.props.content}
          </Text>
        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={() => {this.props.setIsVisible()}}>Done</Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
}