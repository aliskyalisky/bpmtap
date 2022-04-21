import {useState} from 'react'

function Button() {
const [count, setCount] = useState(0);

const clickd = () => setCount(count + 1);
    return (
      <div className="Button">
          <p>{count}</p>
          <button type="button" className="tapbtn" onClick={clickd}></button>
          <button onClick={() => setCount(0)} className="resetBtn">resetterino</button>
      </div>
    );
  }
  
  export default Button;