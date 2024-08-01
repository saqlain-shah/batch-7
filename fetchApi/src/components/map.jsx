import React from 'react'

export default function Map() {
    let listItem =["pen","book","copy","reser","marker","ink"];
  return (
    <>
    <h1>List of items</h1>
    <ul>
       { listItem.map((item)=>{
        <li>{item}</li>

        })}
    </ul>
    
  
    
    
    </>
  )
}
