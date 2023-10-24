import styles from './CardDay.module.scss';
import { forwardRef } from 'react';
import { Button } from '../Button/Button';
import { WEEK, MONTH } from '../../variables/days';
import classNames from 'classnames';

export const CardDay = forwardRef(function Hello(
  { date, selectedDate, setSelectedDate, pointsOfTask },
  ref
) {
  const day = new Date(date);
  const dayOfTheWeek = WEEK[new Date(date).getDay()];
  const dayOfTheMonth = day.getDate() + ' ' + MONTH[day.getMonth()];

  const CardDayClass = classNames(styles.card_day, {
    [styles.card_day_selected_date]: selectedDate === date
  });

  const pointsOfTaskClass = (point) => {
    return classNames(styles.card_day__point, {
      [styles.card_day__point_done]: point,
      [styles.card_day__point_notDone]: !point
    });
  };

  const handleSelectedDate = () => setSelectedDate(date);

  return (
    <Button ref={ref} className={CardDayClass} onClick={handleSelectedDate}>
      <p>{dayOfTheWeek}</p>
      <p className={styles.card_day__date}>{dayOfTheMonth}</p>
      <div className={styles.card_day__points}>
        {pointsOfTask?.map((point, id) => {
          return <div key={id} className={pointsOfTaskClass(point)}></div>;
        })}
      </div>
    </Button>
  );
});
