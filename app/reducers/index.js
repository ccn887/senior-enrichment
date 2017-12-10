/* combineReducers is not currently used, but eventually should be for modular code :D */
import { combineReducers } from 'redux'
import campuses from './campuses';
import students from './students';

export default combineReducers({
  campuses,
  students
});

export * from './campuses';
export * from './students';

