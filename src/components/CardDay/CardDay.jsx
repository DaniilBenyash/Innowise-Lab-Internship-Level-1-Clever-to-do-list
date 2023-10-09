import './CardDay.scss';

export const CardDay = ({day, date, selected, setSelected}) => {
    const style = `
        card-day 
        ${date === new Date().getDate() && 'card-day_today'} 
        ${selected === date && 'card-day_selected'}
    `
    return (
        <button className={style} onClick={() => setSelected(date)}>
            <p className='card-day__day'>{day}</p>
            <p className='card-day__date'>{date}</p>
        </button>
    )
}