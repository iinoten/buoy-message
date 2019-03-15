import * as firebase from 'firebase';
let config = {
  apiKey: "AIzaSyDqvgfjo0TFGcec0aIDfqo-2MoQcdimKYs",
  authDomain: "buoy-message.firebaseapp.com",
  databaseURL: "https://buoy-message.firebaseio.com",
  projectId: "buoy-message",
  storageBucket: "buoy-message.appspot.com",
  messagingSenderId: "325897667671"
};
firebase.initializeApp(config);

export default firebase;