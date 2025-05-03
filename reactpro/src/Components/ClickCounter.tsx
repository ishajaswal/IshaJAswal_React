import React from "react";
import UpdatedComponent from "./UpdatedComponent";
const ClickCounter =(props)=>{
  const{count,incrementCount,name}=props;
  return(
    <div>
      <h1>{name}</h1>
      <button onClick={incrementCount}>Clicked {count} Times</button>
    </div>
  )
};
export default UpdatedComponent(ClickCounter,5);