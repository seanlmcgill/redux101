import { combineReducers } from 'redux';
import { todoReducer as todos } from '../dashboard';

// Aggregate all reducers
const rootReducer = combineReducers({
  todos
});

export default rootReducer;
