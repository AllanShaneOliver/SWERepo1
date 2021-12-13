import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCFqynzCHcag9Rhq_621W3wwo6OwGlsz70",
  authDomain: "boggle-app-aso.firebaseapp.com",
  projectId: "boggle-app-aso",
  storageBucket: "boggle-app-aso.appspot.com",
  messagingSenderId: "634333053751",
  appId: "1:634333053751:web:613f3e94535ea0998d50b2",
  measurementId: "G-00H7CZD14T"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth(); // firebase authentication
export const firestore = firebase.firestore(); // firestore db
export default firebase;