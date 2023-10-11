import { useEffect, useState } from "react";
import { Header } from "../../components/Header/Header.jsx";
import { Calendar } from "../../components/Calendar/Calendar.jsx";
import { TasksSection } from "../../components/TasksSection/TasksSection.jsx";
import { useUserData } from "../../features/userData/useUserData.js";
import { useTasks } from "../../features/tasks/useTasks.js";

export const MainPage = () => {
    //Установка выбранного дня
    const date = new Date()
    const today = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()
    const [selectedDate, setSelectedDate] = useState(today)
    //-----//
    //Получение задач
    const { userData } = useUserData()
    const { tasks, getTasks } = useTasks()
    
    useEffect(() => {
        userData && getTasks(userData.uid)
    }, [userData])
    //-----//
    return (
        <div>
            <Header user={userData}/>
            <Calendar selectedDate={selectedDate} setSelectedDate={setSelectedDate}/>
            <TasksSection tasks={tasks} selectedDate={selectedDate} userData={userData}/>
        </div>    
    )
}