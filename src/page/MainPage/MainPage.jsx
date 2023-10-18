import { useEffect, useState } from 'react';
import { Header } from '../../components/Header/Header.jsx';
import { Calendar } from '../../components/Calendar/Calendar.jsx';
import { TasksSection } from '../../components/TasksSection/TasksSection.jsx';
import { useUserData } from '../../features/userData/useUserData.js';
import { useTasks } from '../../features/tasks/useTasks.js';
import { store } from '../../redux/store.js';
import { today } from '../../utils/getToday.js';

export const MainPage = () => {
  const [selectedDate, setSelectedDate] = useState(today);

  const { userData } = useUserData();
  const { tasks } = useTasks();

  useEffect(() => {
    userData && store.dispatch({ type: 'tasks/getTasks', payload: userData.uid });
  }, [userData]);

  return (
    <div>
      <Header user={userData} />
      <Calendar selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
      <TasksSection tasks={tasks} selectedDate={selectedDate} />
    </div>
  );
};
