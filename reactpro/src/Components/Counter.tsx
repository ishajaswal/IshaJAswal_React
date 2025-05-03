import React, { useEffect, useState} from  "react";

const Counter=()=>{
  let[count,setCount]=useState(100);
  const[name,changeName]=useState("React");
const increment1 = ()=>{
  setCount(count + 1);
};
const decrement1=()=>{
  setCount(count-1);
};
const changeCount=()=>{
  count=count+1;
  console.log(count);
  }
return(
  <div>
  {name}
   <br></br>
     <div>count-{count}</div>
     <button onClick={increment1}>Increment</button>
    <button onClick={decrement1}>Decrement</button>
    <button onClick={changeCount}>ChangeCountWrongWay</button>
    <button onClick={()=>setCount((count+10))}>IncBy10</button>
  </div>
);
}
export default Counter


