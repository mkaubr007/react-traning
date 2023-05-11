// import React, { useState } from "react";

import CounterButton from "./CounterButton";
import CounterOutput from "./CounterOutput";

const Counter = () => {
  // const [counter, setCounter] = useState(0);

  // const incrementCounter = () => {
  //   setCounter(counter + 1);
  // };

  // const decrementCounter = () => {
  //   setCounter(counter - 1);
  // };
  return (
    <div className="row">
      <div className="col-md-12">
        <div className="my-3">
          {/* <CounterOutput data={counter} /> */}
          <CounterOutput />
        </div>
        <div className="my-3">
          {/* <CounterButton
            handleIncrement={incrementCounter}
            handleDecrement={decrementCounter}
          /> */}
           <CounterButton/>
        </div>
      </div>
    </div>
  );
};
export default Counter;
