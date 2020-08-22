import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAWgu9x2YXy-6laciy1XJW4IiMZ3HdcAoM",
  authDomain: "dispen-labocoradir.firebaseapp.com",
  databaseURL: "https://dispen-labocoradir.firebaseio.com",
  projectId: "dispen-labocoradir",
  storageBucket: "dispen-labocoradir.appspot.com",
  messagingSenderId: "219828973281",
  appId: "1:219828973281:web:3266c380c4504e462e51a0",
  measurementId: "G-3JW88S58P2"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;