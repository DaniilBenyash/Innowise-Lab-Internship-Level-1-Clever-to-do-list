import { useEffect, useState } from "react";
import { Header } from "../../components/Header/Header.jsx";
import { Calendar } from "../../components/Calendar/Calendar.jsx";
import { TasksSection } from "../../components/TasksSection/TasksSection.jsx";
import { useUserData } from "../../features/userData/useUserData.js";
import { store } from "../../redux/store.js";
import { useTasks } from "../../features/tasks/useTasks.js";

export const MainPage = () => {
    const [selected, setSelected] = useState(new Date())

    const { userData } = useUserData()

    const { tasks, getTasks } = useTasks()
    
    useEffect(() => {
        userData && getTasks(userData.uid)
    }, [userData])

    return (
        <div>
            <Header user={userData}/>
            <Calendar selected={selected} setSelected={setSelected}/>
            <TasksSection tasks={tasks}/>
        </div>    
    )
}