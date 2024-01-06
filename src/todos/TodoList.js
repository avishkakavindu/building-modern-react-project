import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import NewTodoForm from './NewTodoForm';
import TodoListItem from './TodoListItem';
import { loadTodos, deleteTodoRequest, completeTodoRequest } from './thunks';
import { getCompletedTodos, getIncompleteTodos } from './selectors';
import { getTodosLoading } from './selectors';
import './TodoList.css';

const TodoList = ({
  completedTodos = [],
  inCompletedTodos = [],
  isLoading,
  onRemovePressed,
  onCompletePressed,
  startLoadingTodos,
}) => {
  useEffect(() => {
    startLoadingTodos();
  }, []);

  const loadingMessage = <div>Loading ...</div>;

  const content = (
    <div className='list-wrapper'>
      <NewTodoForm />
      <h3> Incomplete:</h3>
      {inCompletedTodos.map((todo) => (
        <TodoListItem
          key={todo?.text}
          todo={todo}
          onRemovePressed={onRemovePressed}
          onCompletePressed={onCompletePressed}
        />
      ))}

      <h3> Completed: </h3>
      {completedTodos.map((todo) => (
        <TodoListItem
          key={todo?.text}
          todo={todo}
          onRemovePressed={onRemovePressed}
          onCompletePressed={onCompletePressed}
        />
      ))}
    </div>
  );

  return isLoading ? loadingMessage : content;
};

const mapStateToProps = (state) => ({
  completedTodos: getCompletedTodos(state),
  inCompletedTodos: getIncompleteTodos(state),
  isLoading: getTodosLoading(state),
});

const mapDispatchToProps = (dispatch) => ({
  onRemovePressed: (id) => dispatch(deleteTodoRequest(id)),
  onCompletePressed: (id) => dispatch(completeTodoRequest(id)),
  startLoadingTodos: () => dispatch(loadTodos()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
