import React, { useState } from 'react'

const Counter = () => {
const [count,setCount]=useState(0)

const handlechnage=(val)=>{
setCount(count+val)
}


  return (
    <div>
    <h1 data-testid="counter" >Counter: {count}</h1>
      <button data-testid="counter-add" onClick={()=>handlechnage(5)} >ADD</button>
      <button data-testid="counter-reduce" onClick={()=>handlechnage(-5)}>REDUCE</button>
    </div>
  )
}

export default Counter
