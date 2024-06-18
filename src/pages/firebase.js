
import firebase from "firebase/app";
import '@firebase/firestore';
import 'firebase/storage';


const firebaseConfig = {
  apiKey: "AIzaSyCQJ5v-cfh6vl4-yaAXclwOYLxF1-AvBrg",
  authDomain: "arte-l-vre.firebaseapp.com",
  databaseURL: "https://arte-l-vre-default-rtdb.firebaseio.com",
  projectId: "arte-l-vre",
  storageBucket: "arte-l-vre.appspot.com",
  messagingSenderId: "196407055092",
  appId: "1:196407055092:web:89159b6a4ce4f6914dc4a1"
};

if(firebase.app.length == 0){
  Firebase = firebase.initializeApp(firebaseConfig);

}



export default firebase;

