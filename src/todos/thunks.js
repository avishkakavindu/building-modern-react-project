import {
  loadTodosInProgress,
  loadTodosSuccess,
  loadTodosFailure,
  createTodo,
  removeTodo,
  completeTodo,
} from './actions.js';

export const displayAlert = (text) => () => {
  alert(text);
};

export const loadTodos = () => async (dispatch, getState) => {
  try {
    dispatch(loadTodosInProgress());

    const response = await fetch('https://dummyjson.com/todos');
    const resJson = await response.json();
    dispatch(loadTodosSuccess(resJson.todos));
  } catch (error) {
    dispatch(loadTodosFailure());
    dispatch(displayAlert(error));
  }
};

export const addTodoRequest = (text) => async (dispatch, getState) => {
  try {
    const body = JSON.stringify({
      todo: text,
      completed: false,
      userId: 5,
    });

    const response = await fetch('https://dummyjson.com/todos/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body,
    });
    const resJson = await response.json();
    dispatch(createTodo(resJson));
  } catch (error) {
    dispatch(loadTodosFailure());
    dispatch(displayAlert(error));
  }
};

export const deleteTodoRequest = (id) => async (dispatch, getState) => {
  try {
    const response = await fetch('https://dummyjson.com/todos/1', {
      method: 'DELETE',
    });
    const resJson = await response.json();
    debugger;
    dispatch(removeTodo(resJson));
  } catch (error) {
    dispatch(loadTodosFailure());
    dispatch(displayAlert(error));
  }
};

export const completeTodoRequest = (id) => async (dispatch, getState) => {
  try {
    const body = JSON.stringify({
      completed: true,
      userId: 5,
    });

    const response = await fetch(`https://dummyjson.com/todos/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body,
    });
    const resJson = await response.json();
    debugger;
    dispatch(completeTodo(resJson));
  } catch (error) {
    dispatch(loadTodosFailure());
    dispatch(displayAlert(error));
  }
};
