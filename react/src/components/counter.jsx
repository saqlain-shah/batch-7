import React, { useEffect, useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {

    console.log(count)
  
  }, [count]);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  const decrement = () => {
    setCount(prevCount => prevCount - 1);
  };

  

  return (
    <div>
        <p onClick={}>Increment </p>
        <p>{data}</p>
        <p>Decrement </p>

    </div>
  )
}
