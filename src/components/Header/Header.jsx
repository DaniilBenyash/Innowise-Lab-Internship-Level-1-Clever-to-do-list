import React from 'react';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
import { useUserData } from '../../features/userData/useUserData';
import { MAIN_PAGE, SIGN_IN } from '../../variables/routes';

export const Header = ({ user = null }) => {
  const { deleteUser } = useUserData();
  return (
    <header className={styles.header}>
      <Link to={MAIN_PAGE}>
        <h1 className={styles.header__title}>To Do List</h1>
      </Link>
      {user ? (
        <div className={styles.header__user_panel}>
          Hello, {user.email}
          <button onClick={deleteUser}>
            <img
              width="35"
              height="35"
              src="https://img.icons8.com/ios-filled/50/fire-exit.png"
              alt="exit"
            />
          </button>
        </div>
      ) : (
        <Link to={SIGN_IN} className={styles.header__link}>
          <img
            width="35"
            height="35"
            src="https://img.icons8.com/ios-filled/50/guest-male--v1.png"
            alt="guest-male--v1"
          />
        </Link>
      )}
    </header>
  );
};
