import { Link } from 'react-router-dom';
import styles from './Task.module.scss';
import { Button } from '../Button/Button';
import { TASK_PAGE_ID } from '../../variables/routes';
import classNames from 'classnames';

export const Task = ({ id, title, status, onClick }) => {
  const TaskClass = classNames(styles.task, {
    [styles.task_done]: status
  });

  const TaskButtonClass = classNames(styles.task__button, {
    [styles.task__button_done]: status
  });

  return (
    <div className={TaskClass}>
      <Button className={TaskButtonClass} onClick={onClick} />
      <Link className={styles.task__link} to={TASK_PAGE_ID(id)}>
        {title}
      </Link>
    </div>
  );
};
