import firebase from 'react-native-firebase';

export const loginUserService = (email, password) => {
  return firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(response => {
      return response;
    })
    .catch(err => {
      return err;
    });
};
