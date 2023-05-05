import './App.css';
import randomColor from 'randomcolor';
import React, { useState } from 'react';

export default function App() {
  const [color1, setColor1] = useState(randomColor());
  const [color2, setColor2] = useState(randomColor());
  function generate() {
    setColor1(randomColor());
    setColor2(randomColor());
  }
  return (
    <div className="App" style={{ backgroundColor: color1 }}>
      <div style={{ backgroundColor: color2 }}>
        <button onClick={() => generate()}>Generate</button>
        <div>Generated Color: {color2}</div>
      </div>
      <div>Generated Color: {color1}</div>
    </div>
  );
}
