import styles from './CardDay.module.scss';
import { forwardRef } from 'react';

export const CardDay = forwardRef(function Hello(
  { date, selectedDate, setSelectedDate, daysWithTasks },
  ref
) {
  const week = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const month = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
  ];
  const day = new Date(date);
  const dayOfTheWeek = week[new Date(date).getDay()];
  const dayOfTheMonth = day.getDate() + ' ' + month[day.getMonth()];

  return (
    <button
      ref={ref}
      className={`${styles.card_day}  ${selectedDate === date && styles.card_day_selected - date}`}
      onClick={() => setSelectedDate(date)}>
      <p>{dayOfTheWeek}</p>
      <p className={styles.card_day__date}>{dayOfTheMonth}</p>
      <div className={styles.card_day__points}>
        {daysWithTasks[date] ? (
          daysWithTasks[date].map((el, id) => {
            return (
              <div
                key={id}
                className={`${styles.card_day__point} ${
                  el ? styles.card_day__point_done : styles.card_day__point_notDone
                }`}></div>
            );
          })
        ) : (
          <div></div>
        )}
      </div>
    </button>
  );
});
