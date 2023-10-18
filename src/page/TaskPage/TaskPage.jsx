import styles from './TaskPage.module.scss'
import { useState } from 'react';
import { useParams } from "react-router"
import { useNavigate } from 'react-router-dom';
import { Header } from "../../components/Header/Header";
import { useUserData } from "../../features/userData/useUserData.js";
import { useTasks } from '../../features/tasks/useTasks';
import { store } from '../../redux/store';
import { MAIN_PAGE } from '../../variables/routes';

export const TaskPage = () => {
    const { id } = useParams();
    const { tasks } = useTasks()

    const taskToUpdate =  tasks && tasks.find(task => task.id === id)

    const { userData } = useUserData()
    const [update] = useState(id === 'create' ? false : true)
    const [task, setTask] = useState(update ? taskToUpdate.task : '' )
    const [date, setDate] = useState(update ? taskToUpdate.date : getDate())

    const navigate = useNavigate()

    const changeTaskTextarea = (event) => setTask(event.target.value)
    const changeDateInput = (event) => setDate(event.target.value)

    // Создание или обновление таска
    function handleClick() {
        const generateId = `f${(~~(Math.random()*1e8)).toString(16)}`
        const taskData = {
            task: task,
            date: date,
            id: update ? taskToUpdate.id : generateId,
            status: update ? taskToUpdate.status : false,
        }
        const payload = {
            userId: userData.uid,
            task: taskData
        }
        if(task) {
            update ?
            store.dispatch({type: 'tasks/updateTask', payload: payload})
            :
            store.dispatch({type: 'tasks/postTask', payload: payload})
    
            navigate(MAIN_PAGE)
        }
    }
    //-----//

    return (
        <main>
            <Header user={userData} />
            <h1>{update ? 'Update task' : 'Save task'}</h1>
            <div className={styles.task_page__task}>
                <label htmlFor="">Task</label>
                <textarea name="" id="" cols="30" rows="10" placeholder='Your task' value={task} onChange={changeTaskTextarea}></textarea>
            </div>
            <div className={styles.task_page__date}>
                <label htmlFor="">Date</label>
                <input type="date" min={getDate()} value={date} onChange={changeDateInput}/>
            </div>
            <button className={styles.task_page__button} onClick={handleClick}>{update ? 'Update' : 'Save'}</button>
        </main>
    )
}

// Создание сегодняшней даты
function getDate() {
    const date = new Date()
    const dateForInput = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()
    return dateForInput
}