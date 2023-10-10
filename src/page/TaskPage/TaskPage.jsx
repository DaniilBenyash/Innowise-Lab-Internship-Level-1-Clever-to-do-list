import './TaskPage.scss'
import { useState } from 'react';
import { useParams } from "react-router"
import { Header } from "../../components/Header/Header";
import { useUserData } from "../../features/userData/useUserData.js";

export const TaskPage = () => {
    const { id } = useParams();
    const { userData } = useUserData()

    const [task, setTask] = useState('')
    const [date, setDate] = useState(getDate())
    
    const changeTaskTextarea = (event) => setTask(event.target.value)
    const changeDateInput = (event) => setDate(event.target.value)
     
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
            <button className='task-page__button'>Save</button>
        </main>
    )
}

function getDate() {
    const date = new Date()
    const dateForInput = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
    return dateForInput
}