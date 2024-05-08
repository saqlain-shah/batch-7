import React, { useState, useEffect } from 'react';

export default function Counterr() {
const [count,setCount]=useState(0);
  const inremet =()=>{
    setCount(count=>count+1)
  };
  const decrement =()=>{
    setCount(count=>count-1)
  };
  useEffect(()=>{
    console.log('i ma rendered',count);
  },[count]);
  return (
  <>

   <h1>count :{count}</h1>
  <button onClick={inremet}>increment {count}</button>
  <button onClick={decrement}>Decrement{count}</button>

  </>
  )
}

