import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyCLs25CqoPTRK0g0GaKv--yY3aQS2lwU3k",
  authDomain: "web2all-allolab.firebaseapp.com",
  databaseURL: "https://web2all-allolab.firebaseio.com",
  projectId: "web2all-allolab",
  storageBucket: "web2all-allolab.appspot.com",
  messagingSenderId: "365248641202",
  appId: "1:365248641202:web:0416b9da1803d56842b1ab",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
