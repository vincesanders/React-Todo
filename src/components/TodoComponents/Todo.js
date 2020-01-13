import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinusCircle } from '@fortawesome/free-solid-svg-icons';

export default ({ id, task, toggleCompleted, removeTask }) => {
    const rotateIn = (e) => {
        if (e.target.className === 'listItem') {
            e.target.firstElementChild.firstElementChild.classList.remove('rotateOut');
            e.target.firstElementChild.firstElementChild.classList.add('rotateIn');
        } else if (e.target.parentElement.className === 'deleteItemBtn') {
            e.target.classList.remove('rotateOut');
            e.target.classList.add('rotateIn');           
        } else {
            e.target.parentElement.firstElementChild.firstElementChild.classList.remove('rotateOut');
            e.target.parentElement.firstElementChild.firstElementChild.classList.add('rotateIn');            
        }
    }
    const rotateOut = (e) => {
        if (e.target.className === 'listItem') {
            e.target.firstElementChild.firstElementChild.classList.remove('rotateIn');
            e.target.firstElementChild.firstElementChild.classList.add('rotateOut');
        } else if (e.target.parentElement.className === 'deleteItemBtn') {
            e.target.classList.remove('rotateIn');
            e.target.classList.add('rotateOut');           
        } else {
            e.target.parentElement.firstElementChild.firstElementChild.classList.remove('rotateIn');
            e.target.parentElement.firstElementChild.firstElementChild.classList.add('rotateOut');            
        }
    }
    const handleClick = e => {
        e.target.classList.toggle('done');
        toggleCompleted(id);
    }
    //TODO: Add functionality to make deleted item slide up and then disappear
    return (
        <li className='listItem' onMouseEnter={rotateIn} onMouseLeave={rotateOut}>
            <span className='deleteItemBtn' onClick={() => removeTask(id)} ><FontAwesomeIcon className='icon' icon={faMinusCircle} /></span>
            <span onClick={handleClick} >{task}</span>
        </li>
    );
}