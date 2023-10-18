import React from 'react';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
import { useUserData } from '../../features/userData/useUserData';
import { MAIN_PAGE } from '../../variables/routes';
import { Image } from '../Image/Image';

export const Header = ({ user }) => {
  const { deleteUser } = useUserData();
  return (
    <header className={styles.header}>
      <Link to={MAIN_PAGE}>
        <h1 className={styles.header__title}>To Do List</h1>
      </Link>
      <div className={styles.header__user_panel}>
        Hello, {user.email}
        <button onClick={deleteUser}>
          <Image
            width="35"
            height="35"
            src="https://img.icons8.com/ios-filled/50/fire-exit.png"
            alt="exit"
          />
        </button>
      </div>
    </header>
  );
};
