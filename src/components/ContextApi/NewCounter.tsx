import React, { useContext } from 'react'
import { MyContext } from './MyContext'

const NewCounter = () => {

    const {count, increment, decrement}=useContext(MyContext);


  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  )
}

export default NewCounter
