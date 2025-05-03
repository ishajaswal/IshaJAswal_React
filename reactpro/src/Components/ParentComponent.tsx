import React,{useState} from "react";
import  ChildComponent from "./ChildComponent"

const ParentComponent=()=>{
  const[parentName]=useState("Parent");
  const greetParent=(childName)=>{
    alert(`Hello ${parentName} from ${childName}`);
  };
return(
  <div>
    <ChildComponent greetHandler={greetParent}></ChildComponent>
  </div>
);
};

export default ParentComponent;