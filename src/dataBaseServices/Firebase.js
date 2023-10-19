import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { ref, onValue, child, get, set } from 'firebase/firebase';
import { firebase } from '../firebaseInit';

export class FirebaseAuth {
  constructor() {
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

export class FirebaseTodo {
  constructor() {
    this.dbRef = ref(firebase);
  }

  async getTasks(userId) {
    const starCountRef = ref(firebase, userId);
    const promiseGetTasks = new Promise((res) => {
      onValue(starCountRef, (snapshot) => {
        res(snapshot.val());
      });
    });
    return await promiseGetTasks;
  }

  async changeStatusTask(taskId, userId) {
    await get(child(this.dbRef, userId)).then((snapshot) => {
      if (snapshot.exists()) {
        const tasks = snapshot.val().map((task) => {
          return task.id === taskId ? { ...task, status: !task.status } : task;
        });
        set(ref(firebase, userId), [...tasks]);
      }
    });
    return await this.getTasks(userId);
  }

  async postTask(task, userId) {
    await get(child(this.dbRef, userId)).then((snapshot) => {
      set(ref(firebase, userId), snapshot.exists() ? [...snapshot.val(), task] : [task]);
    });
    return await this.getTasks(userId);
  }

  async updateTask(task, userId) {
    await get(child(this.dbRef, userId)).then((snapshot) => {
      if (snapshot.exists()) {
        const tasks = snapshot.val().map((el) => (el.id === task.id ? task : el));
        set(ref(firebase, userId), [...tasks]);
      }
    });
    return await this.getTasks(userId);
  }
}
