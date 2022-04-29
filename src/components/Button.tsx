import {useEffect, useState} from 'react'

interface Props {
  count: number;
  setCount: (count: number) => void;
  timeArray: Array<number>;
  setTimeArray: (timeArray: Array<number>) => void;

}

export const Button: React.FC<Props> = ({setCount, count, timeArray, setTimeArray}) => {



const clickd = () => {
  setCount(count + 1)
  setTimeArray([...timeArray, Date.now()]);
  const intervals = timeArray
  .map((item, index) => {
    if (index === 0) {
      return 400;
    }
    return timeArray[index] - timeArray[index - 1]
  })
  .filter(x => x > 0);

  const average = intervals.reduce((a,b) => a + b, 0) / timeArray.length;

  const bpm = 60 / average * 1000;
  
  console.log(bpm);
};
    return (
      <div className="Button">
          <button type="button" className="tapbtn" onClick={clickd}><h1>{count}</h1></button>
          <button onClick={() => setCount(0)} className="resetBtn">resetterino</button>
      </div>
    );
  }
  
  export default Button;