import { useSelector } from 'react-redux'
import { store } from '../../redux/store'

export const useUserData = () => {
    const userData = useSelector(state => state.userData.userData)
    const deleteUser = () => store.dispatch({type: 'userData/deleteUser'})
    
    return {
        userData,
        deleteUser
    }
}