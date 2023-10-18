import { Link } from 'react-router-dom';
import styles from './Task.module.scss';
import { TASK_PAGE_ID } from '../../variables/routes';

export const Task = ({ id, title, status, changeStatus, userData }) => {
  const data = {
    userId: userData.uid,
    taskId: id
  };
  return (
    <div className={`${styles.task} ${status && styles.task_done}`}>
      <button
        className={`${styles.task__button} ${status && styles.task__button_done}`}
        onClick={() => changeStatus(data)}></button>
      <Link className={styles.task__link} to={TASK_PAGE_ID(id)}>
        {title}
      </Link>
    </div>
  );
};
