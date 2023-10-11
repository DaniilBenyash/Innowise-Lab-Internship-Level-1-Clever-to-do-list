import { Link } from 'react-router-dom';
import './Task.scss';

export const Task = ({id, title, status, setStatus}) => {
    return (
        <div className={`task ${status && 'task_done'}`}>
            <button className={`task__button ${status && 'task__button_done'}`} onClick={() => setStatus(!status)}></button>
            <Link className='task__link' to={'/task/' + id}>
                {title}
            </Link>  
        </div>  
    )
}