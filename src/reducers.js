import {
  INCREMENT,
  DECREMENT
} from './actions';

// Step 1: Describe the ideal/typical state.
// {
//   count: 0
// }

const initialState = { count: 0 };

// Step 3: Write a reducer that accepts
// the current state and an action
const counter = (state=initialState, action) => {
  if (!action) {
    return state;
  }

  switch(action.type) {
    case INCREMENT:
      // add 1 to the count
      break;
    case DECREMENT:
      // subtract 1 from the count
      break;
    default:
      return state;
  }
}