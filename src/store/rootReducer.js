import { combineReducers } from 'redux';
import { todoReducer as todos } from '../todos';

// Aggregate all reducers
const rootReducer = combineReducers({
  todos
});

export default rootReducer;
