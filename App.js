import { Component } from "react";
import { LoginView } from "./src/views";
import { Actions, Router, Scene } from "react-native-router-flux";

const SENES = Actions.create(
  <Scene key="root">
    <Scene key="login" component={LoginView} title="Login" />
  </Scene>
);
export default class App extends Component{
  render() {
    return <Router scenes={SENES} />;
  };
  
}