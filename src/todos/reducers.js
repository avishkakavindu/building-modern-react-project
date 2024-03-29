import {
  CREATE_TODO,
  REMOVE_TODO,
  COMPLETE_TODO,
  LOAD_TODOS_IN_PROGRESS,
  LOAD_TODOS_SUCCESS,
  LOAD_TODOD_FAILIURE,
} from './actions.js';

const initialState = {
  isLoading: false,
  data: [],
};

export const todos = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case CREATE_TODO: {
      const { todo } = payload;
      return { ...state, data: state.data.concat(todo) };
    }
    case REMOVE_TODO: {
      const { todo: removedTodo } = payload;
      return {
        ...state,
        data: state.data.filter((todo) => todo.id !== removedTodo.id),
      };
    }
    case COMPLETE_TODO: {
      const { todo: completedTodo } = payload;
      return {
        ...state,
        data: state.data.map((todo) => {
          if (todo.id === completedTodo.id) {
            return { ...todo, completed: true };
          }
          return todo;
        }),
      };
    }

    case LOAD_TODOS_SUCCESS: {
      const { todos } = payload;
      return { ...state, isLoading: false, data: todos };
    }
    case LOAD_TODOS_IN_PROGRESS: {
      return { ...state, isLoading: true };
    }
    case LOAD_TODOD_FAILIURE: {
      return { ...state, isLoading: false };
    }
    default:
      return state;
  }
};
