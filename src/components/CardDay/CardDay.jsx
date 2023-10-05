import './CardDay.scss';

export const CardDay = ({day, date, selected}) => {
    return (
        <div className={`card-day ${date === new Date().getDate() && 'card-day_today'} ${selected === date && 'card-day_selected'}`}>
            <p className='card-day__day'>{day}</p>
            <p className='card-day__date'>{date}</p>
        </div>
    )
}