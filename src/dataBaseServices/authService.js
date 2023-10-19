import { FirebaseAuth } from './firebase';

class AuthService {
  constructor(DataBaseAuth) {
    this.DataBaseAuth = new DataBaseAuth();
  }
  async signIn(email, password) {
    const response = await this.DataBaseAuth.signIn(email, password);
    return response.user;
  }
  async signUp(email, password) {
    const response = await this.DataBaseAuth.signUp(email, password);
    return response.user;
  }
}

export const authService = new AuthService(FirebaseAuth);
