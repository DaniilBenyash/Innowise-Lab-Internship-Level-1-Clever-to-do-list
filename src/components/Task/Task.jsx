import { Link } from 'react-router-dom';
import './Task.scss';
import { TASK_PAGE_ID } from '../../variables/routes';

export const Task = ({id, title, status, changeStatus, userData}) => {
    const data = {
        userId: userData.uid,
        taskId: id
    }
    return (
        <div className={`task ${status && 'task_done'}`}>
            <button className={`task__button ${status && 'task__button_done'}`} onClick={() => changeStatus(data)}></button>
            <Link className='task__link' to={TASK_PAGE_ID(id)}>
                {title}
            </Link>  
        </div>      
    )
}