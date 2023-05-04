import './App.css';
import randomColor from 'randomcolor';
import React,{ useState } from 'react';

export default function App(){
  const [color, setColor] = useState(randomColor);
  const [inputColor, setInputColor] = useState();
  return (
    <div className="App">
    <div>
    <button onClick={() => setColor(randomColor())}>Generate</button>
    </div>
    </div>
    );
}
