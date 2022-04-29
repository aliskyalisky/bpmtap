import React, { useState } from 'react';
import Button from './components/Button'
import './App.css';
import {StatDisplay} from './components/StatDisplay';



function App() {

    const [count, setCount] = useState<number>(0);
  return (
    <div className="App">
      <Button setCount={setCount} count={count} />
     <StatDisplay count={count}/>
    </div>
  );
}

export default App;