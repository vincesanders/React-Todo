import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            task: ''
        }
    }

    render() {
        return (
            <input type='test' placeholder='Add New Todo' />
        );
    }
}

export default TodoForm;