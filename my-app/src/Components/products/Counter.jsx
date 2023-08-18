import React, { useState } from 'react'

const Counter = (props) => {
const [counter,setCounter]=useState(props.price);


  return (
    <div>
      <button onClick={()=>setCounter(props.price+1)}>+</button>
      <span>{props.price}</span>
      <button onClick={()=>setCounter(props.price-2)}>-</button>
    </div>
  )
}

export default Counter;