import React, { useEffect, useState, useMemo } from 'react';
import styles from './Calendar.module.scss';
import { CardDay } from '../CardDay/CardDay';
import { useTasks } from '../../features/tasks/useTasks';
import { useCalendar } from './useCalendar';

export const Calendar = ({ selectedDate, setSelectedDate }) => {
  const [numberDays, lastDay] = useCalendar();

  const [days, setDays] = useState([]);

  useEffect(() => {
    const date = new Date();
    const days = [];

    for (let i = 0; i < numberDays; i++) {
      days.push(date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate());
      date.setDate(date.getDate() + 1);
    }

    setDays(days);
  }, [numberDays]);

  const { tasks } = useTasks();
  const daysWithTasks = useMemo(() => {
    if (!tasks) return;

    const days = tasks.reduce((days, task) => {
      const day = task.date;
      days[day] ? days[day].push(task.status) : (days[day] = [task.status]);
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
            daysWithTasks={daysWithTasks}
          />
        ) : (
          <CardDay
            key={day}
            date={day}
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
            daysWithTasks={daysWithTasks}
          />
        );
      })}
    </section>
  );
};
