import { useState } from "react";
import { Header } from "../../components/Header/Header.jsx";
import { Calendar } from "../../components/Calendar/Calendar.jsx";

export const MainPage = () => {
    const [selected, setSelected] = useState(new Date().getDate())
    
    return (
        <div>
            <Header/>
            <Calendar selected={selected} setSelected={setSelected}/>
            MainPage
        </div>    
    )
}