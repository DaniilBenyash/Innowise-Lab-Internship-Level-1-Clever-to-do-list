import { useEffect, useState } from 'react';
import { useUserData } from '../../features/userData/useUserData';
import { useNavigate, Link } from 'react-router-dom';
import styles from './SignInPage.module.scss';
import { MAIN_PAGE, SIGN_UP } from '../../variables/routes';
import { Form } from '../../components/Form/Form';

export const SignInPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('error');

  const changeInputEmail = (email) => setEmail(email);
  const changeInputPassword = (password) => setPassword(password);

  const { userData, signInError, signIn } = useUserData();

  const navigate = useNavigate();

  useEffect(() => {
    setError(signInError);
  }, [signInError]);

  useEffect(() => {
    userData && navigate(MAIN_PAGE);
  }, [userData, navigate]);

  function handleSubmit() {
    const formData = {
      email: email,
      password: password
    };
    signIn(formData);
  }

  return (
    <main className={styles.sign_in}>
      <div className={styles.sign_in__section}>
        <h1>Sign In</h1>
        <p className={styles.sign_in__error}>{error}</p>
        <Form
          valueEmail={email}
          onChangeEmail={changeInputEmail}
          valuePassword={password}
          onChangePassword={changeInputPassword}
          nameButton="Sign In"
          onClickButton={handleSubmit}
        />
        <p className={styles.sign_in__link}>
          New to To Do?
          <Link to={SIGN_UP}> Create an account</Link>
        </p>
      </div>
    </main>
  );
};
