import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const configFirebase = JSON.parse(process.env.REACT_APP_FIREBASE_CONFIG);

const app = initializeApp(configFirebase);

export const firebase = getDatabase(app);
