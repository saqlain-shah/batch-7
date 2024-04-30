import React, { useState, useEffect } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [counts,setCounts]=useState(0);
  const increment = () => {
    setCount(count + 1);

  };
  const decrement = () => {
    setCount(count - 1);

  };

  useEffect(() => {
    console.log("Count has changed: ", count);
  }, [count]); 

  return (
    <div>
      <h2>Counter</h2>
      <div>
        <button onClick={decrement}>-</button>
        <span>{count}</span>
        <button onClick={increment}>+</button>
      </div>
    </div>
  );
};

export default Counter;
