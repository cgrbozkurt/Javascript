import React, { useState } from 'react'

const Counter = (props) => {
const [counter,setCounter]=useState(props.price);


  return (
    <div>
      <button onClick={()=>setCounter(counter - 1)}>-</button>
      {props.children}
      <button onClick={()=>setCounter(counter * 2)}>+</button>
    </div>
  )
}

export default Counter;