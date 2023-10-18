import { useEffect, useState } from 'react';
import { useUserData } from '../../features/userData/useUserData';
import { useNavigate } from 'react-router-dom';
import styles from './SignUpPage.module.scss';
import { MAIN_PAGE } from '../../variables/routes';
import { Form } from '../../components/Form/Form';

export const SignUpPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('error');

  const changeInputEmail = (email) => setEmail(email);
  const changeInputPassword = (password) => setPassword(password);

  const { userData, signUpError, signUp } = useUserData();

  const navigate = useNavigate();

  useEffect(() => {
    setError(signUpError);
  }, [signUpError]);

  useEffect(() => {
    userData && navigate(MAIN_PAGE);
  }, [userData, navigate]);

  function handleSubmit() {
    const formData = {
      email: email,
      password: password
    };
    signUp(formData);
  }

  return (
    <main className={styles.sign_up}>
      <div className={styles.sign_up__section}>
        <h1>Sign Up</h1>
        <p className={styles.sign_up__error}>{error}</p>
        <Form
          valueEmail={email}
          onChangeEmail={changeInputEmail}
          valuePassword={password}
          onChangePassword={changeInputPassword}
          nameButton="Sign Up"
          onClickButton={handleSubmit}
        />
      </div>
    </main>
  );
};
