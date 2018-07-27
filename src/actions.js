// Step 2: List out all the ways
// we could change state

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

// const actions = {
//   INCREMENT: 'INCREMENT',
//   DECREMENT: 'DECREMENT'
// }

/*
  {
    type: INCREMENT
  }
  {
    type: DECREMENT
  }
*/
// These are action creators, which cut down on typos.
// Uses implicit return.
// Note the parens around the returned object!
const actionIncrement = () => ({
  type: INCREMENT
});

const actionDecrement = () => ({
  type: DECREMENT
});

