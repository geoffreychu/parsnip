import React from 'react'
import Task from './Task'

const TaskList = props => {
    return (
        <div className="task-list">
            <div className="task-list-title">
                <strong>{props.status}</strong>
            </div>
            <div>{props.tasks.Length}</div>
            {props.tasks.map(task => (       
                <div> 
                    <hr/>        
                    <Task key={task.id} task={task} />
                </div>                    
            ))}
        </div>
    );
}

export default TaskList;