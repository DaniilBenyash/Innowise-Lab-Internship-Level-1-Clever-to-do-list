import './TasksSection.scss';
import { Task } from '../Task/Task';
import { Link } from 'react-router-dom';
import { useTasks } from '../../features/tasks/useTasks';

export const TasksSection = ({tasks, selectedDate, userData}) => {
    const { changeStatusTask } = useTasks()
    return (
        <section className='tasks-section'>
            <h2>Tasks</h2>
            {tasks && tasks.filter(task => task.date === selectedDate).map(task => {
                return (
                    <Task key={task.id} id={task.id} title={task.task} status={task.status} changeStatus={changeStatusTask} userData={userData}/>
                )
            })}
            <Link to='/task/create'>
                <button className='tasks-section__button'>Create task</button>
            </Link>
            
        </section>    
    )
}
