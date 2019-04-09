import React, {Component} from "react";
import {View} from "react-native";
import {Button, HelperText, Text, TextInput, Title, TouchableRipple} from "react-native-paper";
import firebase from "react-native-firebase";
import {emailRegex} from "./const/regex";

class SignIn extends Component {
  state = {
    email: "",
    password: ""
  };

  fieldIsEmpty = () => {
    return !(this.state.email !== "" && this.state.password !== "");
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
        <Title>Logowanie</Title>
        <TextInput
          autoFocus
          label="Adres email"
          value={this.state.email}
          onChangeText={text => this.setState({ email: text })}
        />
        <HelperText type="error" visible={!emailRegex.test(this.state.email)}>
          Nie poprawny adres email.
        </HelperText>

        <TextInput
          secureTextEntry
          label="Hasło"
          value={this.state.password}
          onChangeText={text => this.setState({ password: text })}
        />
        <Button
          icon="input"
          mode="contained"
          onPress={this.loginToApp}
          disabled={this.fieldIsEmpty()}
        >
          Zaloguj
        </Button>
        <TouchableRipple
          onPress={() => this.props.navigation.navigate("ResetPassword")}
          rippleColor="rgba(0, 0, 0, .32)"
        >
          <Text>Zapomniałem hasła</Text>
        </TouchableRipple>
      </View>
    );
  }
}

export default SignIn;
