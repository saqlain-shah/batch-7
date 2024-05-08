import React from 'react'
import react,{userState} from "react"

export default function firstComponient() {
    const [name ,setName]= userState();
    const [fName ,setfName]= userState();
    const [gmail ,setemail]= userState();

  return (
    <React.Fragment>
        <label>Name</label>
        <input
        value={name}
        type='text'
        onChangeCapture={(e)=>{
            setName(e.target.value)
            
        }}
        />
        <label>fName</label>
        <input
        value={fname}
        type='text'
        onChangeCapture={(e)=>{
            setfName(e.target.value)
            
        }}
        />
        <label>email</label>
        <input
        value={email}
        type='text'
        onChangeCapture={(e)=>{
            setemail(e.target.value)
            
        }}
        />
        <button
        onClick={()=>{
            alert("name",name , "father name", fName , "Gmail", email);
        }}
        >Submit</button>
    </React.Fragment>
    

  )
}
