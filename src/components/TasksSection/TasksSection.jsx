import styles from './TasksSection.module.scss';
import { Task } from '../Task/Task';
import { Link } from 'react-router-dom';
import { useTasks } from '../../features/tasks/useTasks';
import { useUserData } from '../../features/userData/useUserData.js';
import { TASK_PAGE_ID } from '../../variables/routes';

export const TasksSection = ({ tasks, selectedDate }) => {
  const { changeStatusTask } = useTasks();
  const { userData } = useUserData();

  const filteredTasks = tasks?.filter((task) => task.date === selectedDate);

  return (
    <section className={styles.tasks_section}>
      <h2>Tasks</h2>
      {filteredTasks?.map((task) => {
        return (
          <Task
            key={task.id}
            id={task.id}
            title={task.task}
            status={task.status}
            onClick={() =>
              changeStatusTask({
                userId: userData.uid,
                taskId: task.id
              })
            }
          />
        );
      })}
      <Link to={TASK_PAGE_ID('create')}>
        <button className={styles.tasks_section__button}>Create task</button>
      </Link>
    </section>
  );
};
