import {
  INCREMENT,
  DECREMENT
} from './actions';

// Step 1: Describe the ideal/typical state.
// {
//   count: 0
// }

const initialState = { count: 42 };

// Step 3: Write a reducer that accepts
// the current state and an action
export const counter = (state=initialState, action) => {
  if (!action) {
    return state;
  }

  switch(action.type) {
    case INCREMENT:
      // add 1 to the count
      return {
        count: state.count + 1
      }
      break;
    case DECREMENT:
      // subtract 1 from the count
      return {
        count: state.count - 1
      }
      break;
    default:
      return state;
  }
}

