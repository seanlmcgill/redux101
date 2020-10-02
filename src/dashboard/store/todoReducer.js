import * as types from './actionTypes';

const initialState = { list: [], loading: true, error: false };

export function todoReducer(state = initialState, action) {
  switch (action.type) {
    case types.REQUEST_LOAD_TODOS:
      return {
        ...state,
        list: [],
        loading: true,
        error: false
      };
    case types.LOAD_TODOS_SUCCESS:
      return {
        ...state,
        list: action.todos,
        loading: false,
        error: false
      };
    case types.LOAD_TODOS_FAILED:
      return {
        ...state,
        list: [],
        loading: false,
        error: true
      };
    default:
      return state;
  }
}
