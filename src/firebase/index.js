import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyBWfHzaeFaVnLFFtuFu2R4MzeHEUfjoY0s",
  authDomain: "real-estate-946be.firebaseapp.com",
  databaseURL: "https://real-estate-946be.firebaseio.com",
  projectId: "real-estate-946be",
  storageBucket: "real-estate-946be.appspot.com",
  messagingSenderId: "171085660814",
  appId: "1:171085660814:web:a76e3fc77bad029d"
};
firebase.initializeApp(firebaseConfig);

firebase.auth().useDeviceLanguage();

const storage = firebase.storage();
const auth = firebase.auth();

export { storage, auth, firebase as default };
