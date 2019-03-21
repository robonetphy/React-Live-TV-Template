import app from "firebase/app";
import "firebase/auth";
import "firebase/database";

const config = {
  apiKey: "AIzaSyCvp6cV63zeAHbpftMp49uReTwHrfNCHQk",
  authDomain: "livetv-2d6c2.firebaseapp.com",
  databaseURL: "https://livetv-2d6c2.firebaseio.com",
  projectId: "livetv-2d6c2",
  storageBucket: "livetv-2d6c2.appspot.com",
  messagingSenderId: "818703032342"
};

class Firebase {
  constructor() {
    app.initializeApp(config);
    this.auth = app.auth();
    this.db = app.database();
  }
  // *** Auth API ***

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password => this.auth.currentUser.updatePassword(password);

  // *** User API ***

  user = uid => this.db.ref(`users/${uid}`);

  users = () => this.db.ref("users");

  Channels = () => this.db.ref("Channel");
}

export default Firebase;
