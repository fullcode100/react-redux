import React from 'react';
// Counter is dumb.
// It just renders props!

const Counter = (props) => {
  return (
    <div>
      <button onClick={props.decrement}>-</button>
      {props.count}
      <button onClick={props.increment}>+</button>
    </div>
  );
};

export default Counter;