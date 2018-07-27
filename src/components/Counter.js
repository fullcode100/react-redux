import React from 'react';
// Counter is dumb.
// It just renders props!

const Counter = (props) => {
  return (
    <div>
      {props.count}
    </div>
  );
};

export default Counter;