import React from 'react';
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

  render() {
    return (
      <div>
        <header>
          <h2>TO-DO LIST</h2>
          <button>+</button>
        </header>
        <TodoForm addTask={this.addTask} />
        <TodoList todoList={this.state.todoList} />
      </div>
    );
  }
}

export default App;
