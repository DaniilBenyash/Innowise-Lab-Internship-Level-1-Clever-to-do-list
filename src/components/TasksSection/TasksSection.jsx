import styles from './TasksSection.module.scss'
import { Task } from '../Task/Task';
import { Link } from 'react-router-dom';
import { useTasks } from '../../features/tasks/useTasks';
import { TASK_PAGE_ID } from '../../variables/routes';

export const TasksSection = ({tasks, selectedDate, userData}) => {
    const { changeStatusTask } = useTasks()
    return (
        <section className={styles.tasks_section}>
            <h2>Tasks</h2>
            {tasks && tasks.filter(task => task.date === selectedDate).map(task => {
                return (
                    <Task key={task.id} id={task.id} title={task.task} status={task.status} changeStatus={changeStatusTask} userData={userData}/>
                )
            })}
            <Link to={TASK_PAGE_ID('create')}>
                <button className={styles.tasks_section__button}>Create task</button>
            </Link>
            
        </section>    
    )
}
