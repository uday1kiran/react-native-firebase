import * as firebase from "firebase";
import "@firebase/auth";
import "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAxdX5JSlTNpdlQZvC4-WnOEt2ElvodlwA",
  authDomain: "crypto-assets-a321b.firebaseapp.com",
  databaseURL: "https://crypto-assets-a321b.firebaseio.com",
  projectId: "crypto-assets-a321b",
  storageBucket: "crypto-assets-a321b.appspot.com",
  messagingSenderId: "943939181355",
  appId: "1:943939181355:web:6e5bcaf30d171f305f836e",
  measurementId: "G-5RTZYDWFGK",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
