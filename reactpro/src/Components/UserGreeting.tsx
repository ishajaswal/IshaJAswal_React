export default function UserGreeting(){

  const isLoggedIn =true;
}

///Conditional rendering using if else
// if(isLoggedIn){

//   return <div> Welcome Isha</div>
// }else{
//   return <div>Welcoe Guest</div>
// }


// 2. Conditional rndering using element variables

// let messsage;

// if(isLoggedIn){

//   message=<div>Welcome Isha</div>
// }else{

//   message=<div>Welcomme Guest</div>
// }

// return <div>{message}</div>;


// 3.Conditional rendering using ternary operator. It can be used with JSX return isLoggedIn ? <div> Welcome <ishi:div>W</ishi:div></div>:<div>Welcome Guest</div>

// 4. Conditional Rendering usiing short circuit Approach

return isLoggedIn && <div>Welcome Isha</div>