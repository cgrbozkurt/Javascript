import React, { useState } from "react";

const Counter = (props) => {

  return (
    <div>
      <button onClick={() => props.setCounter(props.counter - 1)}>-</button>
      {props.children}
        <button onClick={() => props.setCounter(props.counter * 2)}>*</button>
    </div>
  );
};

export default Counter;
