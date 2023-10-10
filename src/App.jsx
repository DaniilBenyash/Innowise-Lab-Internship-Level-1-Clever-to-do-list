import { MainPage } from './page/MainPage/MainPage';
import { TaskPage } from './page/TaskPage/TaskPage';
import { SignUpPage } from './page/SignUpPage/SignUpPage';
import { SignInPage } from './page/SignInPage/SingInPage';
import { Route, Routes } from 'react-router';
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

export const App = () => {
  const firebaseConfig = {
    apiKey: "AIzaSyBDjC-qIPwa9yh63ZBORkVCUqd4LlphIWg",
    authDomain: "todo-f7753.firebaseapp.com",
    projectId: "todo-f7753",
    storageBucket: "todo-f7753.appspot.com",
    messagingSenderId: "556863220441",
    appId: "1:556863220441:web:41b10295ee7cf8f7f42cc8",
    databaseURL: "https://todo-f7753-default-rtdb.europe-west1.firebasedatabase.app",
  };
  const app = initializeApp(firebaseConfig);
  const database = getDatabase(app);
  
  return (
    <div className="App">
      <Routes>
        <Route
          path='/'
          element={ <MainPage/> }
        />
        <Route
          path='/task/:id'
          element={ <TaskPage/> }
        />
        <Route
          path='/signin'
          element={ <SignInPage/> }
        />
        <Route
          path='/register'
          element={ <SignUpPage/> }
        />
      </Routes>
    </div>
  );
}
