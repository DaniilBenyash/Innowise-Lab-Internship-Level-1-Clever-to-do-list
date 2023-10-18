import { useSelector } from 'react-redux';
import { store } from '../../redux/store';

export const useSignIn = () => {
  const signInError = useSelector((state) => state.signIn.error);

  const signIn = (userData) => store.dispatch({ type: 'signIn/signIn', payload: userData });

  return {
    signInError,
    signIn
  };
};
