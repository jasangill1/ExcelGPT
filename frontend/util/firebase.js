import {getApp, getApps, initializeApp} from "firebase/app"
import {getFirestore} from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyAeBUkK8Cn9Eu8ojt5TbigbUDd4xPd1y_8",
  authDomain: "excelgpt-386906.firebaseapp.com",
  projectId: "excelgpt-386906",
  storageBucket: "excelgpt-386906.appspot.com",
  messagingSenderId: "1098234243191",
  appId: "1:1098234243191:web:c5d960f48e57f12c12be72",
  measurementId: "G-9VJD4T6QZD"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app)

export {db}