import React, { useEffect, useState, useMemo } from 'react';
import styles from './Calendar.module.scss';
import { CardDay } from '../CardDay/CardDay';
import { useTasks } from '../../features/tasks/useTasks';
import { useCalendar } from './useCalendar';
import { getListDate } from '../../utils/getListDates';

export const Calendar = ({ selectedDate, setSelectedDate }) => {
  const [numberDays, lastDay] = useCalendar();

  const [days, setDays] = useState([]);

  useEffect(() => {
    const days = getListDate(numberDays);
    setDays(days);
  }, [numberDays]);

  const { tasks } = useTasks();

  const daysWithTasks = useMemo(() => {
    if (!tasks) return;

    const days = tasks.reduce((days, task) => {
      const day = task.date;

      if (days[day]) {
        days[day].push(task.status);
      } else {
        days[day] = [task.status];
      }

      return days;
    }, {});

    return days;
  }, [tasks]);

  return (
    <section className={styles.calendar}>
      {days.map((day, id) => {
        return id === days.length - 1 ? (
          <CardDay
            key={day}
            date={day}
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
            ref={lastDay}
            pointsOfTask={daysWithTasks[day]}
          />
        ) : (
          <CardDay
            key={day}
            date={day}
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
            pointsOfTask={daysWithTasks[day]}
          />
        );
      })}
    </section>
  );
};
