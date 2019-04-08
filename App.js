import React from "react";
import { StyleSheet } from "react-native";
import { Provider as PaperProvider, Button } from "react-native-paper";
import firebase from "react-native-firebase";
import Login from "./src/Login";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  async componentDidMount() {
    // TODO: You: Do firebase things
    // const { user } = await firebase.auth().signInAnonymously();
    // console.warn('User -> ', user.toJSON());
    // await firebase.analytics().logEvent('foo', { bar: '123'});
  }

  render() {
    return (
      <PaperProvider>
        <Login />
      </PaperProvider>
    );
  }
}


