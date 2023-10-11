import './TaskPage.scss'
import { useState } from 'react';
import { useParams } from "react-router"
import { Header } from "../../components/Header/Header";
import { useUserData } from "../../features/userData/useUserData.js";
import { store } from '../../redux/store';

export const TaskPage = () => {
    const { id } = useParams();
    const { userData } = useUserData()
    const [task, setTask] = useState('')
    const [date, setDate] = useState(getDate())
    
    const changeTaskTextarea = (event) => setTask(event.target.value)
    const changeDateInput = (event) => setDate(event.target.value)

    function handleClick() {
        const generateId = `f${(~~(Math.random()*1e8)).toString(16)}`
        const taskData = {
            task: task,
            date: date,
            id: generateId,
            status: false,
        }
        const payload = {
            id: userData.uid,
            task: taskData
        }

        store.dispatch({type: 'tasks/postTask', payload: payload})
    }
     
    return (
        <main>
            <Header user={userData} />
            <h1>Create task</h1>
            <div className="task-page__task">
                <label htmlFor="">Task</label>
                <textarea name="" id="" cols="30" rows="10" placeholder='Your task' value={task} onChange={changeTaskTextarea}></textarea>
            </div>
            <div className='task-page__date'>
                <label htmlFor="">Date</label>
                <input type="date" min={getDate()} value={date} onChange={changeDateInput}/>
            </div>
            <button className='task-page__button' onClick={handleClick}>Save</button>
        </main>
    )
}

function getDate() {
    const date = new Date()
    const dateForInput = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()
    return dateForInput
}