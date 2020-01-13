import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinusCircle } from '@fortawesome/free-solid-svg-icons';

export default ({ id, task, toggleCompleted, removeTask }) => {
    return (
        <li>
            <span onClick={() => removeTask(id)} ><FontAwesomeIcon icon={faMinusCircle} /></span>
            <span onClick={() => toggleCompleted(id)} >{task}</span>
        </li>
    );
}