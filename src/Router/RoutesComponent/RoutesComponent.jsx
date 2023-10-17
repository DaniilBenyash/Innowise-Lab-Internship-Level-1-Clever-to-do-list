import { MainPage } from '../../page/MainPage/MainPage';
import { TaskPage } from '../../page/TaskPage/TaskPage';
import { SignUpPage } from '../../page/SignUpPage/SignUpPage';
import { SignInPage } from '../../page/SignInPage/SingInPage';
import { ProtectedRoute } from '../ProtectedRouter/ProtectedRoute';
import { Route, Routes } from 'react-router';

export const RoutesComponent = () => {
    return (
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
    )
}