import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyDN7ej2cbVgTrzcsOET6hvJAycsP7zPmkQ',
  authDomain: 'react-chat-0-1.firebaseapp.com',
  databaseURL: 'https://react-chat-0-1-default-rtdb.firebaseio.com/',
};
firebase.initializeApp(config);
export const auth = firebase.auth;
export const db = firebase.database();
