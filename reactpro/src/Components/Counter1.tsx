import React , {useState} from "react";
const Counter1=()=>{
const[count,setCount]=useState(0);
const increment=()=>{
  setCount((prevCount)=>{
const updatedCount=prevCount+1;
console.log(updatedCount);
return updatedCount;
});
//setCount(count+1);
//console.log(count);//This will still log the old value of count
};
const incrementFive=()=>{
increment();
increment();
increment();
increment();
increment();
 };
 return(
<div>
  <div>count-{count}</div>
  <button onClick={incrementFive}>Increment</button>
</div>
 );
};
export default Counter1;