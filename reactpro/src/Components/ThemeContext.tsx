import React,{createContext,useContext,useState} from "react";

const ThemeContext=createContext("");
const Theme=()=>{
  const[theme,setTheme]=useState("light");
  const toggleTheme=()=>{
     setTheme((prevTheme)=>(prevTheme==="light"? "dark":"light"))
  };
  return(
    
    <ThemeContext.Provider value={{theme,toggleTheme}}>
    <div>
      <h1>
        Theme Toggle Example
      </h1>
      <ThemeSwitcher />
      <ThemeDisplay />
    </div>
    </ThemeContext.Provider>
    );
};

const ThemeSwitcher=()=>{
  const{toggleTheme}=useContext(ThemeContext);

  return <button onClick={toggleTheme}> Toggle Theme</button>;
};

const ThemeDisplay=()=>{
  const{theme}=useContext(ThemeContext);

  return(
    <div>
      <p>
        The current Theme is:{theme}
      </p>
    </div>
  );
};
export default Theme;