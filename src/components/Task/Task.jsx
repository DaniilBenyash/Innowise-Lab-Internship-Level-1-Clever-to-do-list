import { Link } from 'react-router-dom';
import './Task.scss';

export const Task = ({id, title, done, setDone}) => {
    return (
        <div className={`task ${done && 'task_done'}`}>
            <button className={`task__button ${done && 'task__button_done'}`} onClick={() => setDone(!done)}></button>
            <Link className='task__link' to={'/task/' + id}>
                {title}
            </Link>  
        </div>  
    )
}