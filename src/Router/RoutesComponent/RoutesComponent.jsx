import { MainPage } from '../../page/MainPage/MainPage';
import { TaskPage } from '../../page/TaskPage/TaskPage';
import { SignUpPage } from '../../page/SignUpPage/SignUpPage';
import { SignInPage } from '../../page/SignInPage/SingInPage';
import { ProtectedRoute } from '../ProtectedRouter/ProtectedRoute';
import { Route, Routes } from 'react-router';
import { MAIN_PAGE, TASK_PAGE, SIGN_IN, SIGN_UP } from '../../variables/routes';

export const RoutesComponent = () => {
    return (
        <Routes>
          <Route
            path={MAIN_PAGE}
            element={ 
              <ProtectedRoute>
                <MainPage/>
              </ProtectedRoute>
            }
          />
          <Route
            path={TASK_PAGE}
            element={ 
              <ProtectedRoute>
                <TaskPage/>
              </ProtectedRoute>
            }
          />
          <Route
            path={SIGN_IN}
            element={ <SignInPage/> }
          />
          <Route
            path={SIGN_UP}
            element={ <SignUpPage/> }
          />
        </Routes>    
    )
}