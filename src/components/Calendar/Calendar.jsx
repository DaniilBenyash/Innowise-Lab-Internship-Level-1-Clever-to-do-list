import React, { useEffect, useState, useRef, createRef } from 'react';
import './Calendar.scss';
import { CardDay } from '../CardDay/CardDay';

export const Calendar = ({ selected, setSelected }) => {
    const [days, setDays] = useState([])
    const [numberDays, setNumberDays] = useState(30)

    useEffect(() => {
        const week = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        const date = new Date()
        const result = []

        for(let i = 0; i < numberDays; i++) {
            console.log(date + '');
            const data = {
                day: week[date.getDay()],
                date: date.getDate(),
                month: month[date.getMonth()],
                fullDate: date + '',
            }

            result.push(data)

            date.setDate(date.getDate() + 1)
        }
        setDays(result)
    }, [numberDays])

    const lastItem = createRef()
    const observerLoader = useRef();

    const actionInSight = (entries) => {
        if (entries[0].isIntersecting) {
          setNumberDays(numberDays + 30)
        }
      };

      useEffect(() => {
        if (observerLoader.current) {
          observerLoader.current.disconnect();
        }
        
        observerLoader.current = new IntersectionObserver(actionInSight);
        if (lastItem.current) {
          observerLoader.current.observe(lastItem.current);
        }
      }, [lastItem]);


    return (
        <section className='calendar'>
            {days.map((card, id) => {
                return id === days.length - 1 ?
                <CardDay 
                    key={card.fullDate} 
                    fullDate={card.fullDate}
                    day={card.day} 
                    date={card.fullDate} 
                    selected={selected}
                    setSelected={setSelected}
                    ref={lastItem}
                />
                :
                <CardDay 
                    key={card.fullDate}
                    fullDate={card.fullDate}
                    day={card.day} 
                    date={card.fullDate} 
                    selected={selected}
                    setSelected={setSelected}
                />
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