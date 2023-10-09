import { MainPage } from './page/MainPage/MainPage';
import { TaskPage } from './page/TaskPage/TaskPage';
import { RegisterPage } from './page/RegisterPage/RegisterPage';
import { SignInPage } from './page/SignInPage/SingInPage';
import { Route, Routes } from 'react-router';

export const App = () => {
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
