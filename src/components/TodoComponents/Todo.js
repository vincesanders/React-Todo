import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinusCircle } from '@fortawesome/free-solid-svg-icons';

class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.icon = React.createRef();
    }
    rotateIn = (e) => {
       this.icon.current.classList.remove('rotateOut');
       this.icon.current.classList.add('rotateIn'); 
    }
    rotateOut = (e) => {
        this.icon.current.classList.remove('rotateIn');
        this.icon.current.classList.add('rotateOut');
    }
    handleClick = e => {
        e.target.classList.toggle('done');
        this.props.toggleCompleted(this.props.id);
    }
    //TODO: Add functionality to make deleted item slide up and then disappear
    render() {
        return (
            <li className='listItem' onMouseEnter={this.rotateIn} onMouseLeave={this.rotateOut}>
                <span className='deleteItemBtn' onClick={() => this.props.removeTask(this.props.id)} >
                    <span ref={this.icon} >
                        <FontAwesomeIcon className='icon' icon={faMinusCircle} />
                    </span>
                </span>
                <span className='task' onClick={this.handleClick} >{this.props.task}</span>
            </li>
        );
    }
}

export default Todo;