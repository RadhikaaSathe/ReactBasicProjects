import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [color, setColor] = useState("olive")
  return (
    <div className=""
    style={{backgroundColor: color}}
    >
     <div className="main">
        <div className="div-btn">
          <button
          onClick={() => setColor("red")}
          className="btn"
          
          >Red</button>
          <button
          onClick={() => setColor("green")}
          className="btn"
          >Green</button>

          <button
          onClick={() => setColor("blue")}
          className="btn"
         
          >Blue</button>
          <button onClick={()=>setColor("black")} className='btn'>

          Black</button>
        </div>
      </div>
    </div>
  )
}

export default App