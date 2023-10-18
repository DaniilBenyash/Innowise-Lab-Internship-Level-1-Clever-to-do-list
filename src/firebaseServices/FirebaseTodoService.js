import { getDatabase, ref, onValue, child, get, set } from 'firebase/database';

export class FirebaseTodoService {
  constructor(userId) {
    this.userId = userId;
    this.db = getDatabase();
    this.dbRef = ref(getDatabase());
    this.starCountRef = ref(this.db, this.userId);
  }

  async getTasks() {
    const promiseGetTasks = new Promise((res) => {
      onValue(this.starCountRef, (snapshot) => {
        res(snapshot.val());
      });
    });
    return await promiseGetTasks;
  }

  async changeStatusTask(taskId) {
    await get(child(this.dbRef, this.userId)).then((snapshot) => {
      if (snapshot.exists()) {
        const tasks = snapshot.val().map((task) => {
          return task.id === taskId ? { ...task, status: !task.status } : task;
        });
        set(ref(this.db, this.userId), [...tasks]);
      }
    });
    return await this.getTasks();
  }

  async postTask(task) {
    await get(child(this.dbRef, this.userId)).then((snapshot) => {
      set(ref(this.db, this.userId), snapshot.exists() ? [...snapshot.val(), task] : [task]);
    });
    return await this.getTasks();
  }

  async updateTask(task) {
    await get(child(this.dbRef, this.userId)).then((snapshot) => {
      if (snapshot.exists()) {
        const tasks = snapshot.val().map((el) => (el.id === task.id ? task : el));
        set(ref(this.db, this.userId), [...tasks]);
      }
    });
    return await this.getTasks();
  }
}
