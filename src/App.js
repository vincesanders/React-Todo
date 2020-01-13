import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todoList: [
        {
          task: 'Example Task 1',
          id: 1,
          completed: false
        },
        {
          task: 'Example Task 2',
          id: 2,
          completed: false
        }
      ]
    }
  }

  toggleCompleted = id => {
    this.setState({
      todoList: this.state.todoList.map(task => {
        if (task.id === id) {
          return {
            ...task,
            completed: !task.completed
          };
        } else {
          return task;
        }
      })
    });
  }

  addTask = taskName => {
    this.setState({
      todoList: [
        ...this.state.todoList,
        {
          task: taskName,
          id: Date.now(),
          completed: false
        }
      ]
    });
  }

  removeTask = id => {
    this.setState({
      todoList: this.state.todoList.filter(task => task.id !== id)
    });
  }

  removeCompleted = () => {
    this.setState({
      todoList: this.state.todoList.filter(task => task.completed === false)
    })
  }

  render() {
    console.log(this.state.todoList);
    return (
      <div className='container' >
        <header>
          <h2>TO-DO LIST</h2>
          <button id="toggleInputBtn"><FontAwesomeIcon icon={faPlus} /></button>
        </header>
        <TodoForm addTask={this.addTask} />
        <TodoList removeTask={this.removeTask} toggleCompleted={this.toggleCompleted} todoList={this.state.todoList} />
        <button className='clearButton' onClick={this.removeCompleted} >Clear Completed</button>
      </div>
    );
  }
}

export default App;
