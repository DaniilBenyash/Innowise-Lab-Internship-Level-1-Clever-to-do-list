import { useSelector } from 'react-redux'

export const useUserData = () => {
    const userData = useSelector(state => state.userData.userData)
    
    return {
        userData
    }
}