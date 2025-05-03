import React from "react";
import UpdatedComponent from "./UpdatedComponent";
const HoverCounter=(props)=>{
  const {count,incrementCount,name}=props;
 return(
<h1 onMouseOver={incrementCount}>Hovered {count} Times</h1>
 );
};
export default UpdatedComponent(HoverCounter,10);