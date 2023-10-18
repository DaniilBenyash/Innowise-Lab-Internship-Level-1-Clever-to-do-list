import styles from './TaskPage.module.scss';
import { useState, useMemo } from 'react';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router-dom';
import { Header } from '../../components/Header/Header';
import { useUserData } from '../../features/userData/useUserData.js';
import { useTasks } from '../../features/tasks/useTasks';
import { MAIN_PAGE } from '../../variables/routes';
import { today } from '../../utils/getToday';
import { Textarea } from '../../components/Textarea/Textarea';
import { Input } from '../../components/Input/Input';

export const TaskPage = () => {
  const { id } = useParams();
  const { tasks, updateTask, postTask } = useTasks();

  const taskToUpdate = useMemo(() => tasks?.find((task) => task.id === id));

  const { userData } = useUserData();
  const isUpdate = id !== 'create';
  const [task, setTask] = useState(isUpdate ? taskToUpdate.task : '');
  const [date, setDate] = useState(isUpdate ? taskToUpdate.date : today);

  const navigate = useNavigate();

  const changeTaskTextarea = (text) => setTask(text);
  const changeDateInput = (date) => setDate(date);

  function handleClick() {
    const generateId = `f${(~~(Math.random() * 1e8)).toString(16)}`;
    const taskData = {
      task: task,
      date: date,
      id: isUpdate ? taskToUpdate.id : generateId,
      status: isUpdate ? taskToUpdate.status : false
    };
    const payload = {
      userId: userData.uid,
      task: taskData
    };
    if (task) {
      isUpdate ? updateTask(payload) : postTask(payload);

      navigate(MAIN_PAGE);
    }
  }

  return (
    <main>
      <Header user={userData} />
      <h1>{isUpdate ? 'Update task' : 'Save task'}</h1>
      <div className={styles.task_page__task}>
        <Textarea
          label="Task"
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Your task"
          value={task}
          onChange={changeTaskTextarea}
        />
      </div>
      <div className={styles.task_page__date}>
        <label htmlFor="">Date</label>
        <Input type="date" min={today} value={date} onChange={changeDateInput} />
      </div>
      <button className={styles.task_page__button} onClick={handleClick}>
        {isUpdate ? 'Update' : 'Save'}
      </button>
    </main>
  );
};
