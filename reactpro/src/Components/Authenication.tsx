import React,{createContext,  useContext, useEffect, useState} from "react";
//set the user authentication

//step1 create the authentication context
const AuthContext=createContext();
//step2 create a  provider component
const AuthProvider=({children})=>{
  const[isAuthenticated,setIsAuthenticated]=useState(false);
  const[user,setUser]=useState(null);
  const login=(username)=>{
    setIsAuthenticated(true);
    setUser({name:username});
  };
const logout=()=>{
    setIsAuthenticated(false);
    setUser(null);
  };
  return(
    <AuthContext.Provider value={{ isAuthenticated, user, login,logout}}>
      {children}
    </AuthContext.Provider>
  );
};
  

  //3 Create a Login Component
const Login =()=>{
 const {login,isAuthenticated}=useContext(AuthContext);
 const[username, setUserName]=useState("");

 const handleLogin=()=>{
  login(username);
 };

 useEffect(()=>{
  if(!isAuthenticated){
    setUserName("");
  }
 },[isAuthenticated]);

 return(
  <div>
    <h2>Login</h2>
    <input type="text" 
    value={username}
    onChange={(e)=>setUserName(e.target.value)}
    placeholder="Enter Your UserName"/>
    <button onClick={handleLogin}>Login</button>
  </div>
 );
};//create a logout component
const Logout=()=>{
  const {logout}=useContext(AuthContext);

  const {setUser}=useContext(AuthContext);

  const  handleLogout=()=>{
    logout();
    setUser(""); //Reset the username while logging out
  };
  return <button onClick={handleLogout}>Logout</button>
};
const UserProfile=()=>{
  const{isAuthenticated,user}=useContext(AuthContext);

  return (
    <div>
      <h2>User Profile</h2>
      {isAuthenticated ? (
        <p>Welcome,{user.name}!</p>
      ):(
        <p>You are not logged in. Please log in to see your profile</p>
      )}
    </div>
  );
};
// The main app Component
const Authentication =()=>{
return(
  <AuthProvider>
    <div>
      <h1>User Authentication Example</h1>
      <UserProfile/>
      <Login/>
      <Logout/>
    </div>
  </AuthProvider>
);
};
export default Authentication;