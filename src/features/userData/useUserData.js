import { useSelector, useDispatch } from 'react-redux';

export const useUserData = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.userData.userData);
  const deleteUser = () => dispatch({ type: 'userData/deleteUser' });

  const signInError = useSelector((state) => state.userData.signInError);
  const signIn = (userData) => dispatch({ type: 'userData/signIn', payload: userData });

  const signUpError = useSelector((state) => state.userData.signUpError);
  const signUp = (userData) => dispatch({ type: 'userData/signUp', payload: userData });

  return {
    userData,
    deleteUser,
    signInError,
    signIn,
    signUpError,
    signUp
  };
};
