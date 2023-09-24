import React ,{useEffect,useState}from 'react'
import axios from 'axios'

export default function HookFetchData() {
    const[post,setPost]=useState([]);
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts").then(()=>{
            console.log("then");
        }).catch((e)=>{
            console.log(e);
        })
        
    },[]);
  return (
    <div>
      <ul>
        
      </ul>
    </div>
  )
}
