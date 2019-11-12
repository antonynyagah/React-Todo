import React from 'react';

import Todo from './todo';

import './todo.css'

function TodoList(props) {
    return (
        <div className='todoList'>
            {props.todoList.map(task => {
                return <Todo task={task} toggleTask={props.toggleTask} />;
            })}
        </div>
    )
}


  export default TodoList 