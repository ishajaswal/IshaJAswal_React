import Reacrt, {useReducer} from "react";

const counterReducer=(state,action)=>{
  switch(action.type){
    case "increment":
      return { count: state.count +1};
      case "decrement":
        return {count: state.count -1};
        case "reset":
          return {count:0};
          default:
          return state;
  }
};
const initialState ={count:0};
const ReduceHook=()=>{
  const [state,dispatch]=useReducer(counterReducer,initialState);

  return(
    <div>
      <h1>Counter:{state.count}</h1>
      <button onClick={()=> dispatch({type:"increment"})}>Increment</button>
      <button onClick={()=> dispatch({type:"decrement"})}>Decrement</button>
      <button onClick={()=> dispatch({type:"reset"})}>Reset</button>
    </div>
  )
}

export default ReduceHook;