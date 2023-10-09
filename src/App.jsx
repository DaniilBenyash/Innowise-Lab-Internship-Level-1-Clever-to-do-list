import { MainPage } from './page/MainPage/MainPage';
import { TaskPage } from './page/TaskPage/TaskPage';
import { RegisterPage } from './page/RegisterPage/RegisterPage';
import { SignInPage } from './page/SignInPage/SingInPage';
import { Route, Routes } from 'react-router';

import { initializeApp } from "firebase/app";

import { store } from './redux/store';
import { useUserInfo } from './features/register/useRegister';
import { useEffect } from 'react';

export const App = () => {

  const { userInfo } = useUserInfo()


  useEffect(() => {
    // store.dispatch({type: 'register/register'})
    console.log(userInfo);
  }, [])
  

  
  const firebaseConfig = {
    apiKey: "AIzaSyBDjC-qIPwa9yh63ZBORkVCUqd4LlphIWg",
    authDomain: "todo-f7753.firebaseapp.com",
    projectId: "todo-f7753",
    storageBucket: "todo-f7753.appspot.com",
    messagingSenderId: "556863220441",
    appId: "1:556863220441:web:41b10295ee7cf8f7f42cc8"
  };
  const app = initializeApp(firebaseConfig);
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
          element={ <RegisterPage/> }
        />
      </Routes>
    </div>
  );
}
