/* combineReducers is not currently used, but eventually should be for modular code :D */
import { combineReducers } from 'redux'
import campuses from './campuses';
import students from './students';

const initialState = {}

const rootReducer = function(state = initialState, action) {
  switch(action.type) {
    default: return state
  }
};

export default combineReducers({
  campuses,
  students
});

export * from './campuses';
export * from './students';
// export * from './currentChannel';
// export * from './messages';
// export * from './name';
// export * from './newChannelEntry';
// export * from './newMessageEntry';
