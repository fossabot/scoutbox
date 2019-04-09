import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { Button, TextInput } from "react-native-paper";
import firebase from "react-native-firebase";
class Login extends Component {
  state = {
    email: "",
    password: ""
  };

  loginToApp = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(auth => {
        console.log(auth);
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <View>
        <TextInput
          label="Adres email"
          value={this.state.email}
          onChangeText={text => this.setState({ email: text })}
        />
        <TextInput
          secureTextEntry
          label="Hasło"
          value={this.state.password}
          onChangeText={text => this.setState({ password: text })}
        />
        <Button icon="input" mode="contained" onPress={this.loginToApp}>
          Press me
        </Button>
      </View>
    );
  }
}

export default Login;
