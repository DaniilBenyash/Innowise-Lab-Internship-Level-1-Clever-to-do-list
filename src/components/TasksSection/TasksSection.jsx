import { useState } from 'react';
import './TasksSection.scss';
import { Task } from '../Task/Task';

export const TasksSection = () => {
    const [doneTask, setDoneTask] = useState(true)
    
    return (
        <section className='tasks-section'>
            <h2>Tasks</h2>
            <Task id={1} title='Add new tasks' done={doneTask} setDone={setDoneTask}/>
        </section>    
    )
}