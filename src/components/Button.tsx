import {useState} from 'react'



function Button() {
const [count, setCount] = useState('hehe');

const clickd = () => setCount(count + count);
    return (
      <div className="Button">
          <p>{count}</p>
          <button type="button" className="tapbtn" onClick={clickd}></button>
      </div>
    );
  }
  
  export default Button;