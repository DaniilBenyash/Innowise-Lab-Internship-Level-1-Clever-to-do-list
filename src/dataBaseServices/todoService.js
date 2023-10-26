import { FirebaseDBService } from './firebaseDBServices';

class ITodoService {
  getTasks() {
    throw new Error('You need to implement this method');
  }

  changeStatusTask() {
    throw new Error('You need to implement this method');
  }

  postTask() {
    throw new Error('You need to implement this method');
  }

  updateTask() {
    throw new Error('You need to implement this method');
  }
}

class TodoService extends ITodoService {
  constructor(dataBaseTodo) {
    super();
    this.dataBaseTodo = dataBaseTodo;
  }

  async getTasks(userId) {
    const response = await this.dataBaseTodo.getTasks(userId);
    return response;
  }

  async changeStatusTask(taskId, userId, tasks) {
    const changedTasks = tasks.map((task) => {
      return task.id === taskId ? { ...task, status: !task.status } : task;
    });

    const response = await this.dataBaseTodo.setTasks(changedTasks, userId);
    return response;
  }

  async postTask(task, userId, tasks) {
    const changedTasks = tasks ? [...tasks, task] : [task];

    const response = await this.dataBaseTodo.setTasks(changedTasks, userId);
    return response;
  }

  async updateTask(task, userId, tasks) {
    const changedTasks = tasks.map((el) => (el.id === task.id ? task : el));

    const response = await this.dataBaseTodo.setTasks(changedTasks, userId);
    return response;
  }
}

export const todoService = new TodoService(new FirebaseDBService());
