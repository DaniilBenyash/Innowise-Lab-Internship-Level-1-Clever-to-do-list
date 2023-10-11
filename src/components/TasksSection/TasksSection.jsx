import { useState } from 'react';
import './TasksSection.scss';
import { Task } from '../Task/Task';
import { Link } from 'react-router-dom';

export const TasksSection = ({tasks}) => {

    
    return (
        <section className='tasks-section'>
            <h2>Tasks</h2>
            {tasks.map(task => {
                return (
                    <Task id={task.id} title={task.task} status={task.status}/>
                )
            })}
            
            <Link to='/task/create'>
                <button className='tasks-section__button'>Create task</button>
            </Link>
            
        </section>    
    )
}