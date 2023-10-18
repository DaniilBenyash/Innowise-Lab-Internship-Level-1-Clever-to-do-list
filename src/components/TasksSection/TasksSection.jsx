import styles from './TasksSection.module.scss';
import { Task } from '../Task/Task';
import { Link } from 'react-router-dom';
import { useTasks } from '../../features/tasks/useTasks';
import { useUserData } from '../../features/userData/useUserData.js';
import { TASK_PAGE_ID } from '../../variables/routes';

export const TasksSection = ({ tasks, selectedDate }) => {
  const { changeStatusTask } = useTasks();
  const { userData } = useUserData();

  const taskFilter = tasks?.filter((task) => task.date === selectedDate);

  return (
    <section className={styles.tasks_section}>
      <h2>Tasks</h2>
      {taskFilter?.map((task) => {
        const TaskToChangeStatus = {
          userId: userData.uid,
          taskId: task.id
        };
        return (
          <Task
            key={task.id}
            id={task.id}
            title={task.task}
            status={task.status}
            onClick={() => changeStatusTask(TaskToChangeStatus)}
          />
        );
      })}
      <Link to={TASK_PAGE_ID('create')}>
        <button className={styles.tasks_section__button}>Create task</button>
      </Link>
    </section>
  );
};
