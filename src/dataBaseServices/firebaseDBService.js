import { getDatabase, ref, onValue, child, get, set } from 'firebase/database';

export class FirebaseTodo {
  constructor() {
    this.db = getDatabase();
    this.dbRef = ref(getDatabase());
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

  async changeStatusTask(taskId, userId) {
    await get(child(this.dbRef, userId)).then((snapshot) => {
      if (snapshot.exists()) {
        const tasks = snapshot.val().map((task) => {
          return task.id === taskId ? { ...task, status: !task.status } : task;
        });
        set(ref(this.db, userId), [...tasks]);
      }
    });
    return await this.getTasks(userId);
  }

  async postTask(task, userId) {
    await get(child(this.dbRef, userId)).then((snapshot) => {
      set(ref(this.db, userId), snapshot.exists() ? [...snapshot.val(), task] : [task]);
    });
    return await this.getTasks(userId);
  }

  async updateTask(task, userId) {
    await get(child(this.dbRef, userId)).then((snapshot) => {
      if (snapshot.exists()) {
        const tasks = snapshot.val().map((el) => (el.id === task.id ? task : el));
        set(ref(this.db, userId), [...tasks]);
      }
    });
    return await this.getTasks(userId);
  }
}
