import React, { useState } from 'react'
import "./counter.css"
const Counter = () => {
    const [count, setCount] = useState(0);

    const inc = () =>{
        setCount(count + 1)
    }
    
    const dec = () =>{
        setCount(count - 1)
    }
  return (
    <div>
      <h1>Counter</h1>
      <h2 className='contertext'>{count}</h2>
      <button className='button' onClick={inc}>increment</button> {' '}
      <button className='button' onClick={dec}>Decrement</button>
    </div>
  )
}

export default Counter
