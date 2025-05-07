import React, { useReducer } from 'react'


type State={count:number};

type Actions={type:"INCREMENT"}| {type:"DECREMENT"};

function reducer(state:State,action:Actions):State
{

    switch (action.type)
    {
        case "INCREMENT":
            return {count:state.count+1};
        case "DECREMENT":
            return {count:state.count-1};
        
            default:
                return state;
    }

}


const Counter2 = () => {

    const [state, dispatch]=useReducer(reducer , {count:0});



  return (
    <div>
        <h3>Count: {state.count}</h3>
        
        
        <button onClick={()=>dispatch({type:"INCREMENT"})}>Increment</button>


      <button onClick={()=>dispatch({type:"DECREMENT"})}>Decrement</button>

    </div>
  )
}

export default Counter2

