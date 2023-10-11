import { useSelector } from 'react-redux'
import { store } from '../../redux/store'

export const useTasks = () => {
    const tasks = useSelector(state => state.tasks)
    const getTasks = (id) => store.dispatch({type: 'tasks/getTasks', payload: id})
    
    return {
        tasks,
        getTasks
    }
}