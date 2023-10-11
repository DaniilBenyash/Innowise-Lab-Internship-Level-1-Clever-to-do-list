import './CardDay.scss';
import { forwardRef } from 'react';

export const CardDay = forwardRef(({date, selectedDate, setSelectedDate}, ref) => {
    // Замена чисел в дате на слова
    const week = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

    const day = new Date(date)

    const dayOfTheWeek = week[new Date(date).getDay()]
    const dayOfTheMonth = day.getDate() + ' ' + month[day.getMonth()]
    //-----//
    return (
        <button 
            ref={ref} 
            className={`card-day ${selectedDate === date && 'card-day_selected-date'}`} 
            onClick={() => setSelectedDate(date)}
        >
            <p className='card-day__day'>{dayOfTheWeek}</p>
            <p className='card-day__date'>{dayOfTheMonth}</p>
        </button>
    )
});