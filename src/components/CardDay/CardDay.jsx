import './CardDay.scss';
import { forwardRef } from 'react';

export const CardDay = forwardRef(({day, date, selected, setSelected}, ref) => {
    const style = `
        card-day 
        ${date === new Date().getDate() && 'card-day_today'} 
        ${selected === date && 'card-day_selected'}
    `
    return (
        <button ref={ref} className={style} onClick={() => setSelected(date)}>
            <p className='card-day__day'>{day}</p>
            <p className='card-day__date'>{date}</p>
        </button>
    )
});