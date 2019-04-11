import React from 'react';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider as PaperProvider} from 'react-native-paper';
import {Provider} from 'react-redux';
import Navigator from './src/Navigator';
import {persistor, store} from './src/helpers/store';
import firebase from 'react-native-firebase';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  async componentDidMount() {
    await firebase.analytics().logEvent('foo', { bar: '123' });
  }

  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <PaperProvider>
            <Navigator />
          </PaperProvider>
        </PersistGate>
      </Provider>
    );
  }
}
