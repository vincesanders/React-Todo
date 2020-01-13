import React from 'react';

export default ({ id, task, toggleCompleted }) => {
    return (
        <li>
            <span>-</span>
            <span onClick={() => toggleCompleted(id)} >{task}</span>
        </li>
    );
}