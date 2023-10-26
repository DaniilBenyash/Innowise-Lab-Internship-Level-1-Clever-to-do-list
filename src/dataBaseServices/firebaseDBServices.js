import { getDatabase, ref, onValue, set } from 'firebase/database';

class IDBServices {
  getData() {
    throw new Error('You need to implement this method');
  }

  setData() {
    throw new Error('You need to implement this method');
  }
}

export class FirebaseDBService extends IDBServices {
  constructor() {
    super();
    this.db = getDatabase();
  }

  async getData(userId) {
    const starCountRef = ref(this.db, userId);

    const promiseGetData = new Promise((res) => {
      onValue(starCountRef, (snapshot) => {
        res(snapshot.val());
      });
    });

    return await promiseGetData;
  }

  async setData(tasks, userId) {
    await set(ref(this.db, userId), tasks);

    return await this.getData(userId);
  }
}
