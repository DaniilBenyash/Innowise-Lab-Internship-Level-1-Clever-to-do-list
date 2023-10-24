import { FirebaseTodo } from './firebaseDBService';

class TodoService {
  constructor(dataBaseTodo) {
    this.DataBaseTodo = dataBaseTodo;
  }

  async getTasks(userId) {
    const response = await this.DataBaseTodo.getTasks(userId);
    return response;
  }

  async changeStatusTask(taskId, userId) {
    const response = await this.DataBaseTodo.changeStatusTask(taskId, userId);
    return response;
  }

  async postTask(task, userId) {
    const response = await this.DataBaseTodo.postTask(task, userId);
    return response;
  }

  async updateTask(task, userId) {
    const response = await this.DataBaseTodo.updateTask(task, userId);
    return response;
  }
}

export const todoService = new TodoService(new FirebaseTodo());
