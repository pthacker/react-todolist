import React from 'react';
import SingleTask from './SingleTask';
import { useTaskProvider } from './TaskProvider';


const TaskList = () => {

    const { taskList } = useTaskProvider()
    return(
        <>
        {taskList.map(task => {
           return <SingleTask key={task.taskId}
            {...task}
            />
        })}
        </>
    )
}

export default TaskList;