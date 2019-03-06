import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

// const list = []

class App extends React.Component {
  // you will need a place to store your state in this component.

constructor() {
  super();
  this.state = {
    list: [],
    inputValue: '',
  };
}

addTodo = e => {
  e.preventDefault();
  const newTodo = {
    id: Date.now(),
    item: this.state.inputValue,
    completed: false,
  };
  console.log(newTodo);
  this.setState({
    list: [...this.state.list, newTodo],
    inputValue: '',
  });
};

handleChanges = e => {
  this.setState({
    inputValue: e.target.value
  });
};

resetList = e => {
    this.setState({
      list: [],
    });
  };

  render() {
    return (
      <div>
          <h2>To Do:</h2>
          <TodoList list={this.state.list}/>

          <TodoForm addTodo={this.addTodo} value={this.state.inputValue} handleChanges={this.handleChanges} />
          <button onClick={this.resetList}>Clear Completed</button>
      </div>
    );
  }
}

export default App;