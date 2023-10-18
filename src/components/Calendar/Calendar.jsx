import React, { useEffect, useState, useMemo } from 'react';
import styles from './Calendar.module.scss';
import { CardDay } from '../CardDay/CardDay';
import { useTasks } from '../../features/tasks/useTasks';
import { useCalndar } from './useCalendar';

export const Calendar = ({ selectedDate, setSelectedDate }) => {
  const [numberDays, lastDay] = useCalndar();
  // Создание массива дат
  const [days, setDays] = useState([]);

  useEffect(() => {
    const date = new Date();
    const days = [];
    console.log(numberDays);
    for (let i = 0; i < numberDays; i++) {
      days.push(date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate());
      date.setDate(date.getDate() + 1);
    }

    setDays(days);
  }, [numberDays]);
  //-----//
  // Реализация бесконечного скроллинга

  //-----//
  // Создание списка дней с задачами
  const { tasks } = useTasks();
  const daysWithTasks = useMemo(() => {
    if (tasks) {
      const days = {};
      tasks.forEach((task) => {
        const day = task.date;
        !days[day] ? (days[day] = [task.status]) : days[day].push(task.status);
      });
      return days;
    }
  }, [tasks]);
  //-----//
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
