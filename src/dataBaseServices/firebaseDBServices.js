import { getDatabase, ref, onValue, set } from 'firebase/database';

class IFirebaseDBServices {
  getTasks() {
    throw new Error('You need to implement this method');
  }

  setTasks() {
    throw new Error('You need to implement this method');
  }
}

export class FirebaseDBServices extends IFirebaseDBServices {
  constructor() {
    super();
    this.db = getDatabase();
  }

  async getTasks(userId) {
    const starCountRef = ref(this.db, userId);

    const promiseGetTasks = new Promise((res) => {
      onValue(starCountRef, (snapshot) => {
        res(snapshot.val());
      });
    });

    return await promiseGetTasks;
  }

  async setTasks(tasks, userId) {
    await set(ref(this.db, userId), tasks);

    return await this.getTasks(userId);
  }
}
