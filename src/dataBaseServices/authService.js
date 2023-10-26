import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { firebase } from '../firebase';

class IAuthService {
  signIn() {
    throw new Error('You need to implement this method');
  }

  signUp() {
    throw new Error('You need to implement this method');
  }
}

export class FirebaseAuth extends IAuthService {
  constructor() {
    super();
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
