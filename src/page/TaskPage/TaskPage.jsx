import './TaskPage.scss'
import { useEffect, useState } from 'react';
import { useParams } from "react-router"
import { useNavigate } from 'react-router-dom';
import { Header } from "../../components/Header/Header";
import { useUserData } from "../../features/userData/useUserData.js";
import { useTasks } from '../../features/tasks/useTasks';
import { store } from '../../redux/store';

export const TaskPage = () => {
    const { id } = useParams();
    const { userData } = useUserData()
    const [task, setTask] = useState('')
    const [date, setDate] = useState(getDate())
    const navigate = useNavigate()
    const { tasks } = useTasks()
    const [update, setUpdate] = useState(false)
    
    const changeTaskTextarea = (event) => setTask(event.target.value)
    const changeDateInput = (event) => setDate(event.target.value)
    const taskToUpdate =  tasks && tasks.find(task => task.id === id)

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
        
        update ?
        store.dispatch({type: 'tasks/updateTask', payload: payload})
        :
        store.dispatch({type: 'tasks/postTask', payload: payload})

        navigate('/')
    }

    useEffect(() => {
        if(id !== 'create') {
            setTask(taskToUpdate.task)
            setDate(taskToUpdate.date)
            setUpdate(true)
        }
    }, [id])
     
    return (
        <main>
            <Header user={userData} />
            <h1>{update ? 'Update task' : 'Save task'}</h1>
            <div className="task-page__task">
                <label htmlFor="">Task</label>
                <textarea name="" id="" cols="30" rows="10" placeholder='Your task' value={task} onChange={changeTaskTextarea}></textarea>
            </div>
            <div className='task-page__date'>
                <label htmlFor="">Date</label>
                <input type="date" min={getDate()} value={date} onChange={changeDateInput}/>
            </div>
            <button className='task-page__button' onClick={handleClick}>{update ? 'Update' : 'Save'}</button>
        </main>
    )
}

function getDate() {
    const date = new Date()
    const dateForInput = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()
    return dateForInput
}