import React, { useState } from 'react';
import Button from './components/Button'
import './App.css';
import {StatDisplay} from './components/StatDisplay';



function App() {

    const [count, setCount] = useState<number>(0);
    const [timeArray, setTimeArray] = useState<number[]>([]);

  return (
    <div className="App">
      <Button setCount={setCount} count={count} timeArray={timeArray} setTimeArray={setTimeArray} />
     <StatDisplay count={count}/>
    </div>
  );
}

export default App;