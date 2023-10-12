import { createContext, useState } from 'react';
import { MainPage } from './page/MainPage/MainPage';
import { TaskPage } from './page/TaskPage/TaskPage';
import { SignUpPage } from './page/SignUpPage/SignUpPage';
import { SignInPage } from './page/SignInPage/SingInPage';
import { Route, Routes, Navigate } from 'react-router';
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { useUserData } from './features/userData/useUserData';

const ThemeContext = createContext(null)

export const App = () => {
  const cofig = JSON.parse(process.env.REACT_APP_FIREBASE_CONFIG)
  const firebaseConfig = cofig
  const app = initializeApp(firebaseConfig);
  const database = getDatabase(app);
  const { userData } = useUserData()

  const ProtectedRoute = ({children}) => {
    if(!userData) {
      return <Navigate to='/signin'/>
    }
    return children
  }

  const [theme, setTheme] = useState('light')

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      <div className='App' >
        <Routes>
          <Route
            path='/'
            element={ 
              <ProtectedRoute>
                <MainPage/>
              </ProtectedRoute>
            }
          />
          <Route
            path='/task/:id'
            element={ 
              <ProtectedRoute>
                <TaskPage/>
              </ProtectedRoute>
            }
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
    </ThemeContext.Provider>
  );
}
