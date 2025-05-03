import { useReducer } from "react";

//import React,{useReducer} from "react";
const userReducer=(state,action)=>{
  switch(action.type){
    case "login":
      return {...state,isAuthenticated:true,user:action.payload};
      case "logout":
        return {...state,isAuthenticated:false,user:null};
        case "updateProfile":
          return {...state,user:{...state.user,...action.payload}};
          default :
          return state;
  }
};
const initialUserState ={isAuthenticated :false,user:null};
const ReduceHook1=()=>{
  const [state,dispatch]=useReducer(userReducer,initialUserState);
  const login=()=>{
    dispatch({
      type:"login",
      payload:{name:"Joh Doe",email:"jaswlisha4@gmail.com"},
    });
  };
  const logout=()=>{
    dispatch({type:"logout"});
  };
  const updateProfile=()=>{
    dispatch({type: "updateProfile",payload:{name:"John Smith"}});
  };
  return (
    <div>
    <h1>
      User Authentication
    </h1>
    {state.isAuthenticated ? (
      <div>
        <h2>Welcome,{state.user.name}</h2>
        <p>Email : {state.user.email}</p>
        <button onClick={updateProfile}>UpdateProfile</button>
        <button onClick={logout}>LogOut</button>
      </div>
    ):(
      <button onClick={login}>Login</button>
    )}
    </div>
  );
};
export default ReduceHook1;