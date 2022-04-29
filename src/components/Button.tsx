import {useState} from 'react'

interface Props {
  count: number;
  setCount: (count: number) => void;
}

export const Button: React.FC<Props> = ({setCount, count}) => {
  console.log(count);

const clickd = () => setCount(count + 1);
    return (
      <div className="Button">
          <button type="button" className="tapbtn" onClick={clickd}></button>
          <button onClick={() => setCount(0)} className="resetBtn">resetterino</button>
      </div>
    );
  }
  
  export default Button;