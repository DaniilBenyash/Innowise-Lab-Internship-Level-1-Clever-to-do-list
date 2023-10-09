import { useState } from "react";
import { Header } from "../../components/Header/Header.jsx";
import { Calendar } from "../../components/Calendar/Calendar.jsx";
import { TasksSection } from "../../components/TasksSection/TasksSection.jsx";

export const MainPage = () => {
    const [selected, setSelected] = useState(new Date().getDate())

    return (
        <div>
            <Header/>
            <Calendar selected={selected} setSelected={setSelected}/>
            <TasksSection/>
        </div>    
    )
}