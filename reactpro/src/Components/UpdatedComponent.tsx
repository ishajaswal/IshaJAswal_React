import React,{useState} from "react";
const UpdatedComponent =(OriginalComponent, incrementNumber)=>{
  const NewComponent=(props)=>{
    const[count,setCount]=useState(0); //manage count using useState
    const incrementCount=()=>{
      setCount((prevCount)=>prevCount+incrementNumber);//increment the count
    };
    console.log(props.name);//you can login here if needed
    //Return the original ocmponent with the added props
    return (
      <OriginalComponent
      count={count}
      incrementCount={incrementCount}
      {...props}//spread the remaining props
      />
    );
  };
  return NewComponent;
};
export default UpdatedComponent;