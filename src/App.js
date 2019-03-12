import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

// const list = []

class App extends React.Component {
  // you will need a place to store your state in this component.

  constructor() {
    super();
    this.state = {
      todoList: [],
      input: '',
    }
  }

  handleChanges = (e) => {
    this.setState({ input: e.target.value });
  }


  addTodo = (e, item) => {
    e.preventDefault();
    const newTodo = {
      name: item,
      id: Date.now(),
      completed: false
    };

    this.setState({
      todoList: [...this.state.todoList, newTodo]
    })
  }

  toggleItem = todoId => {
    this.setState({
      todoList: this.state.todoList.map(todo => {
        if (todoId === todo.id) {
          return {
            ...todo,
            completed: !todo.completed
          }
        };
        return todo;
      })
    })
  }

  clear = (e) => {
    e.preventDefault();
    this.setState({
      todoList: this.state.todoList.filter(item => !item.completed)
    });
  }


  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>Todo List</h1>
        </div>
        <TodoList todoList={this.state.todoList} toggleItem={this.toggleItem} />
        <TodoForm input={this.state.input} handleChanges={this.handleChanges} addItem={this.addTodo} />
        <button onClick={this.clear}>Clear</button>

      </div>
    );
  }
}
export default App;