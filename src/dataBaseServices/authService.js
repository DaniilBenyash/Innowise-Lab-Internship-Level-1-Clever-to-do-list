import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { firebase } from '../firebase';

export class FirebaseAuth {
  constructor() {
    this.firebaseInit = firebase.initialization();
    this.auth = getAuth();
  }

  async signIn(email, password) {
    const promiseSignIn = new Promise((res) => {
      const response = signInWithEmailAndPassword(this.auth, email, password);
      res(response);
    });
    return await promiseSignIn;
  }
  async signUp(email, password) {
    const promiseSignUp = new Promise((res) => {
      const response = createUserWithEmailAndPassword(this.auth, email, password);
      res(response);
    });
    return await promiseSignUp;
  }
}

export const authService = new FirebaseAuth();
