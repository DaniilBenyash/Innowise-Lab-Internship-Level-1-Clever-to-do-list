import { useEffect, useState } from "react";
import { Header } from "../../components/Header/Header.jsx";
import { Calendar } from "../../components/Calendar/Calendar.jsx";
import { TasksSection } from "../../components/TasksSection/TasksSection.jsx";
import { useUserData } from "../../features/userData/useUserData.js";
import { getDatabase, ref, set } from "firebase/database";

export const MainPage = () => {
    const [selected, setSelected] = useState(new Date().getDate())

    const { userData } = useUserData()

    function writeUserData(name, id) {
        const date = new Date()
        const db = getDatabase();
        console.log(date);
        set(ref(db, id),
        [
            
            {task: 'add new tasks1',
            time: new Date() + ' '
            }
        ]
            
        );
      }
    useEffect(() => {
        console.log(userData)
        // writeUserData(3, userData.uid)  
    }, [])

    return (
        <div>
            <Header user={userData}/>
            <Calendar selected={selected} setSelected={setSelected}/>
            <TasksSection/>
        </div>    
    )
}