import { Component } from "react";
import { LoginView } from "./src/views";
import { Actions, Router, Scene } from "react-native-router-flux";
import { PaperProvider } from "react-native-paper";

const SENES = Actions.create(
  <Scene key="root">
    <Scene key="login" component={LoginView} hideNavBar />
  </Scene>
);
export default class App extends Component{
  render() {
    return (
      <PaperProvider>
        <Router scenes={SENES} />
      </PaperProvider>
    );
  };
  
}