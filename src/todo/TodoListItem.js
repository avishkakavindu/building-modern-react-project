import React from 'react';
import './TodoListItem.css';

function TodoListItem(props) {
  const { todo } = props;

  return (
    <div className='todo-item-container'>
      <h1>{todo?.text || ''}</h1>
      <div className='buttons-container'>
        <button className='completed-button'>Mark as completed</button>
        <button className='remove-button'>Remove</button>
      </div>
    </div>
  );
}

export default TodoListItem;
