import {createAppContainer, createStackNavigator, createSwitchNavigator} from 'react-navigation';
import SignIn from './SignIn';
import Home from './Home';
import ResetPassword from './ResetPassword';

const LoginNavigator = createStackNavigator({
  SignIn,
  ResetPassword,
});

const AppNavigator = createStackNavigator({
  Home,
});

const Navigator = createAppContainer(
  createSwitchNavigator(
    {
      Home: AppNavigator,
      Login: LoginNavigator,
    },
    {
      initialRouteName: 'Login',
    },
  ),
);

export default createAppContainer(Navigator);
