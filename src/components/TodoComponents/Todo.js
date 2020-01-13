import React from 'react';

export default ({ id, task, toggleCompleted, removeTask }) => {
    return (
        <li>
            <span onClick={() => removeTask(id)} >-</span>
            <span onClick={() => toggleCompleted(id)} >{task}</span>
        </li>
    );
}