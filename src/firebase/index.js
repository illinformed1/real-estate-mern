import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyBWfHzaeFaVnLFFtuFu2R4MzeHEUfjoY0s", //It's okay for Firebase Api to be public
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
var db = firebase.firestore();

db.settings({ timestampsInSnapshots: true });

export { storage, auth, db, firebase as default };
