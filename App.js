import React from 'react';
import { Button, ThemeProvider } from 'react-native-elements';
import firebase from 'react-native-firebase';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  async componentDidMount() {
    // TODO: You: Do firebase things
    // const { user } = await firebase.auth().signInAnonymously();
    // console.warn('User -> ', user.toJSON());

    await firebase.analytics().logEvent('foo', { bar: '123'});
  }

  render() {
    return (
      <ThemeProvider>
      <Button title="Hey!" />
    </ThemeProvider>
    );
  }
}
