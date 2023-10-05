import React from 'react';
import './Calendar.scss';
import { CardDay } from '../CardDay/CardDay';

export const Calendar = ({ selected, setSelected }) => {
    const days = getMonth()

    return (
        <section className='calendar'>
            {days.map(card => {
                return (
                    <button className='calendar__day' onClick={() => setSelected(card.date)}>
                        <CardDay 
                            key={card.date} 
                            day={card.day} 
                            date={card.date} 
                            selected={selected}
                        />
                    </button>
                ) 
            })}
        </section>    
    )
}

function getMonth () {
    const week = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    
    const date = new Date()

    const days = [{
        day: week[date.getDay()],
        date: date.getDate()
    }]

    date.setDate(date.getDate() + 1)

    while(date.getDate() > 1){
        days.push({
            day: week[date.getDay()],
            date: date.getDate()
        })
        date.setDate(date.getDate() + 1)
    }
    return days
}

getMonth()