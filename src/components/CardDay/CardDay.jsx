import styles from './CardDay.module.scss';
import { forwardRef } from 'react';
import { WEEK, MONTH } from '../../variables/days';
import classNames from 'classnames';

export const CardDay = forwardRef(function Hello(
  { date, selectedDate, setSelectedDate, daysWithTasks },
  ref
) {
  const day = new Date(date);
  const dayOfTheWeek = WEEK[new Date(date).getDay()];
  const dayOfTheMonth = day.getDate() + ' ' + MONTH[day.getMonth()];

  const CardDayClass = classNames(styles.card_day, {
    [styles.card_day_selected_date]: selectedDate === date
  });

  const handleSelectedDate = () => setSelectedDate(date);
  return (
    <button ref={ref} className={CardDayClass} onClick={handleSelectedDate}>
      <p>{dayOfTheWeek}</p>
      <p className={styles.card_day__date}>{dayOfTheMonth}</p>
      <div className={styles.card_day__points}>
        {daysWithTasks[date]?.map((day, id) => {
          return (
            <div
              key={id}
              className={classNames(styles.card_day__point, {
                [styles.card_day__point_done]: day,
                [styles.card_day__point_notDone]: !day
              })}></div>
          );
        })}
      </div>
    </button>
  );
});
