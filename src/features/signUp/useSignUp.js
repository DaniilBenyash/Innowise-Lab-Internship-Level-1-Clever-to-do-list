import { useSelector } from 'react-redux'
import { store } from '../../redux/store'

export const useSignUp = () => {
    const signUpError = useSelector(state => state.signUp.error)

    const signUp = (userData) => store.dispatch({type: 'signUp/signUp', payload: userData})
    
    return {
        signUpError,
        signUp
    }
}