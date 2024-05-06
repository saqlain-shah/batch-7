import React, { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    
    console.log("Count has changed:",count);
  }, [count]); 

  const increment = () => {
    setCount(count + 1);
    console.log(count)

  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h2>Counter</h2>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default Counter;
