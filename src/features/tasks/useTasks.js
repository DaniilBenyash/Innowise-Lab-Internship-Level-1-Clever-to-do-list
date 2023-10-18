import { useSelector, useDispatch } from 'react-redux';

export const useTasks = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);

  const getTasks = (id) => dispatch({ type: 'tasks/getTasks', payload: id });
  const changeStatusTask = (id) => dispatch({ type: 'tasks/changeStatusTask', payload: id });
  const updateTask = (task) => dispatch({ type: 'tasks/updateTask', payload: task });
  const postTask = (task) => dispatch({ type: 'tasks/postTask', payload: task });

  return {
    tasks,
    getTasks,
    changeStatusTask,
    updateTask,
    postTask
  };
};
