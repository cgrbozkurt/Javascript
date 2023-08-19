import React, { useState } from "react";

const Counter = (props) => {
const {counter,setCounter,children}=props;
  return (
    <div>
      <button onClick={() => setCounter(props.counter - 1)}>-</button>
      {children}
        <button onClick={() => setCounter(props.counter + 2)}>*</button>
    </div>
  );
};

export default Counter;
