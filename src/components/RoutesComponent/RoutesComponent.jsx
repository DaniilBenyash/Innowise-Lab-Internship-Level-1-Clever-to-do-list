import { MainPage } from '../../page/MainPage/MainPage';
import { TaskPage } from '../../page/TaskPage/TaskPage';
import { SignUpPage } from '../../page/SignUpPage/SignUpPage';
import { SignInPage } from '../../page/SignInPage/SingInPage';
import { Route, Routes, Navigate } from 'react-router';
import { useUserData } from '../../features/userData/useUserData';

export const RoutesComponent = () => {
    const { userData } = useUserData()

    const ProtectedRoute = ({children}) => {
      if(!userData) {
        return <Navigate to='/signin'/>
      }
      return children
    }

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