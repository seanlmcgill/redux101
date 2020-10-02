import * as types from './actionTypes';
import axios from 'axios';

export const loadTodos = () => {
  return async (dispatch) => {
    dispatch(requestLoadTodos());
    const result = await axios.get('./todos.json');
    // added delay for effect
    setTimeout(() => {
      dispatch(loadTodosSuccess(result.data));
    }, 2000);
  };
};

const requestLoadTodos = () => {
  return { type: types.REQUEST_LOAD_TODOS };
};

const loadTodosSuccess = (todos) => {
  return { type: types.LOAD_TODOS_SUCCESS, todos: todos };
};
