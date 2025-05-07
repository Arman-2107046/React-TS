import React, { useReducer } from 'react'
import { counterReducer, CounterState } from './counterReducer';

const initialState:CounterState={count:0};

const CounterRed = () => {

    const [state, dispatch]=useReducer(counterReducer, initialState);

  return (
    <div>
        <h2>Counter: {state.count}</h2>
        
        <button onClick={()=>dispatch({type:"INCREMENT"})}>Increment</button>

        <button onClick={()=>dispatch({type:"DECREMENT"})}>Decrement</button>
      
    </div>
  )
}

export default CounterRed
