import {useState} from 'react'

interface Props {
  count: number;
  setCount: (count: number) => void;
  timeArray: Array<number>;
  setTimeArray: (timeArray: Array<number>) => void;

}

export const Button: React.FC<Props> = ({setCount, count, timeArray, setTimeArray}) => {
  console.log(timeArray);
  for (let i=0; i>10; i++) {
    setTimeArray([...timeArray, i]);
    console.log(timeArray);

  }
  console.log(timeArray);



const clickd = () => setCount(count + 1);
    return (
      <div className="Button">
          <button type="button" className="tapbtn" onClick={clickd}><h1>{count}</h1></button>
          <button onClick={() => setCount(0)} className="resetBtn">resetterino</button>
      </div>
    );
  }
  
  export default Button;