import { useEffect, useRef, useState } from 'react';
import { useUserData } from '../../features/userData/useUserData';
import { useSignUp } from '../../features/signUp/useSignUp';
import { Input } from '../../components/Input/Input';
import { Button } from '../../components/Button/Button';
import { useNavigate } from 'react-router-dom';
import styles from './SignUpPage.module.scss';
import { MAIN_PAGE } from '../../variables/routes';

export const SignUpPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('error');

  const inputEmail = useRef(null);
  const inputPassword = useRef(null);

  const changeInputEmail = (event) => setEmail(event.target.value);
  const changeInputPassword = (event) => setPassword(event.target.value);

  const { userData } = useUserData();
  const { signUpError, signUp } = useSignUp();

  const navigate = useNavigate();

  useEffect(() => {
    setError(signUpError);
  }, [signUpError]);

  useEffect(() => {
    console.log(userData);
    userData && navigate(MAIN_PAGE);
    console.log(userData);
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
        <form action="">
          <Input
            label="Email"
            ref={inputEmail}
            placeholder="Your email"
            value={email}
            onChange={changeInputEmail}
            type="email"
          />
          <Input
            label="Password"
            ref={inputPassword}
            placeholder="Your password"
            value={password}
            onChange={changeInputPassword}
            type="password"
          />
          <Button text="Sign Up" onClick={handleSubmit} />
        </form>
      </div>
    </main>
  );
};
