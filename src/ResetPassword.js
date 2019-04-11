import React, {Component} from 'react';
import {View} from 'react-native';
import {Button, HelperText, Text, TextInput, Title} from 'react-native-paper';
import firebase from 'react-native-firebase';
import {emailRegex} from './const/regex';

class ResetPassword extends Component {
  state = {
    email: '',
  };

  resetPassword = () => {
    firebase
      .auth()
      .sendPasswordResetEmail(this.state.email)
      .then(result => {
        console.log(result);
      })
      .catch(err => {
        console.log(err);
      });
  };

  validEmail = email => {
    if (email === '') {
      return false;
    } else {
      return !emailRegex.test(email);
    }
  };

  render() {
    return (
      <View>
        <Title> Zresetuj hasło </Title>
        <Text> Uwaga! </Text>
        <Text> Zresetowania hasła nie da się cofnąć </Text>
        <TextInput
          autoFocus
          label="Adres email"
          value={this.state.email}
          onChangeText={text =>
            this.setState({
              email: text,
            })
          }
        />
        <HelperText type="error" visible={this.validEmail(this.state.email)}>
          Nie poprawny adres email.
        </HelperText>
        <Button onPress={this.resetPassword}> Klijnij, aby zresetować </Button>
      </View>
    );
  }
}

export default ResetPassword;
