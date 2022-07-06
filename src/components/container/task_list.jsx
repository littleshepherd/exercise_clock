import React, {useState, useEffect} from 'react';
import {LEVELS } from '../../models/levels.enums';
import { Task } from '../../models/task.class';
import TaskComponent from '../pure/task';

const TaskListComponent = () => {

    const defaultTask = new Task('Example', 'Deafult description', false, LEVELS.NORMAL)
    //estado de componente
    const [tasks, setTasks] = useState(defaultTask)
    const [loading, setloading] = useState(true);

    //control del ciclo de vida
    useEffect(() => {
        console.log('Task list has been modified');
        setloading(false)
        return () => {
           console.log('Task list is going to unmount')
        };
    }, [tasks]);
    const changeState = (id) => {
        console.log('TODO: cambiar estado de una tarea')
    }

    return (
        <div>
            <div>
            <h1>Your task:</h1>
                 
            </div>
            <TaskComponent task={defaultTask}></TaskComponent>
        </div>
    );
};

export default TaskListComponent;
