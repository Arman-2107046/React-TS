

export type CounterState={count:number};

type CounterActions={type:"INCREMENT"}|{type:"DECREMENT"};



export function counterReducer(state:CounterState, action:CounterActions):CounterState
{

    switch (action.type)
{
    case "INCREMENT":
        return {count:state.count+1};
    case "DECREMENT":
        return {count: state.count-1};
    default:
        return state;
}
}