import { Navigate } from 'react-router';
import { useUserData } from '../../features/userData/useUserData';

export const ProtectedRoute = ({children}) => {
    const { userData } = useUserData()

    return (
        <>
            {userData ? children : <Navigate to='/signin'/>}
        </>
    )
}