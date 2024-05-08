import React , {useState,useEffect} from "react";

export default function UseEffect() {
    const [num,setNum]=useState(0);
    const [nums,setNums]=useState(0);
    useEffect(()=>{
        alert("you clicke me")
    }, [num,nums]);
  return (
    <>
    
    <button onClick={()=>{
        setNum(num+1);
    }}>click me{num}</button>

<button onClick={()=>{
        setNums(nums+1);
    }}>click me{nums}</button>

    
    </>
  )
}
