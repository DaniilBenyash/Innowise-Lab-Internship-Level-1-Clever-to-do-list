import React, { useEffect, useState, useRef, createRef, useCallback } from 'react';
import './Calendar.scss';
import { CardDay } from '../CardDay/CardDay';

export const Calendar = ({ selectedDate, setSelectedDate }) => {
    // Создание массива дат
    const [days, setDays] = useState([])
    const [numberDays, setNumberDays] = useState(30)

    useEffect(() => {
        const date = new Date()
        const days = []

        for(let i = 0; i < numberDays; i++) {
            days.push(date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate())
            date.setDate(date.getDate() + 1)
        }

        setDays(days)
    }, [numberDays])
    //-----//
    // Реализация бесконечного скроллинга
    const lastItem = createRef()
    const observerLoader = useRef();

    const actionInSight = useCallback((entries) => {
        if (entries[0].isIntersecting) {
          setNumberDays(numberDays + 30)
        }
    }, [numberDays])

    useEffect(() => {
    if (observerLoader.current) {
        observerLoader.current.disconnect();
    }

    observerLoader.current = new IntersectionObserver(actionInSight);
    if (lastItem.current) {
        observerLoader.current.observe(lastItem.current);
    }
    }, [actionInSight, lastItem]);
    //-----//
    return (
        <section className='calendar'>
            {days.map((day, id) => {
                return id === days.length - 1 ?
                <CardDay 
                    key={day} 
                    date={day}
                    selectedDate={selectedDate}
                    setSelectedDate={setSelectedDate}
                    ref={lastItem}
                />
                :
                <CardDay 
                    key={day} 
                    date={day}
                    selectedDate={selectedDate}
                    setSelectedDate={setSelectedDate}
                />
            })}
        </section>    
    )
}