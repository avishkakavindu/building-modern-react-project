import React, { useState } from 'react';
import './NewTodoForm.css';

function NewTodoForm() {
  const [inputValue, setInputValue] = useState('');

  return (
    <div className={'new-todo-form'}>
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder='Type your new todo here'
        className='new-todo-input'
        type='text'
      />
      <button className='new-todo-button'>Create</button>
    </div>
  );
}

export default NewTodoForm;
