import React, { useState } from 'react'
import './index.css'

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="main">
      <div className='counter_box'>
      <h1>counter {count}</h1>
      <div className='counter_btn'>
      <button className="increment" onClick={() => setCount(count + 1)}>increment</button>
      <button className="reset" onClick={() => setCount(0)}>reset</button>
      <button className="decrement" onClick={() => setCount(count - 1)}>decrement</button>
      </div>
    </div>
    </div>
  )
}

export default App
