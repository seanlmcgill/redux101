import * as types from './actionTypes';

const initialState = { todos: [], loading: true, error: false };

export function todoReducer(state = initialState, action) {
  switch (action.type) {
    case types.REQUEST_LOAD_TODOS:
      return {
        ...state,
        loading: true,
        error: false
      };

    case types.LOAD_TODOS_SUCCESS:
      return {
        ...state,
        todos: action.todos,
        loading: false,
        error: false
      };
    case types.LOAD_TODOS_FAILED:
      return {
        ...state,
        todos: [],
        loading: false,
        error: true
      };
    default:
      return state;
  }
}
