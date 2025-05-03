import React from "react";
import Hello1 from "./Hello1";

// const Hello=()=>{

//   return (

//       <div>

//       <h1>
      
//       Hi Wassup
      
//       </h1>
      
//       </div>
      
//   );
// }

//React.createElement(type, props, children)

// return React.createElement("div",null,"<h1>Hi bro</h1>");
// return React.createElement("div",null,"h1","Isha Jaswal");

// return React.createElement("div",null,"<h1> Hi Bro</h1>");



return React.createElement(

  "div",
  null,
  React.createElement(

    "h1",

    {

      id:"Hello",

      className:"textClass",

    },

    "Hello Isha"
  )
);
// };

}


export default Hello;


