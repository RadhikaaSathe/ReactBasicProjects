import React,{useState,useEffect} from 'react'
import './HookCounter.css'

export default function HookCounter() {
  const[count,setCount]= useState(0);
  const[x,setX]=useState(0);
  const[y,setY]=useState(0);

  function logMousePosition(e){
    console.log("logMouse");
    setX(e.clientX);
    setY(e.clientY);

  }

  useEffect(()=>{
   console.log("Use Effect Called");
   window.addEventListener("mousemove",logMousePosition);
  },[])

  return (
    <div>
       <h1 className='font height'>x {x} - y{y}</h1>
      <button ></button>
    </div>
  )
}
