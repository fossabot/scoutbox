import React from "react";
import {Provider as PaperProvider} from "react-native-paper";

import Navigator from "./src/Navigator";

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
        <Navigator/>
      </PaperProvider>
    );
  }
}
