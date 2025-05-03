function FunctionClick(){

  return(

    <div>
    
    
    <button onClick={actionToBeDone}>Click</button>

    <button onClick={()=> actionToBeDone()}>Click</button>

    <button onClick={()=> actionToBeDone("Hello")}>Click</button>
    
    </div>
  );

  function actionToBeDone(str="Welcome to function click"){

    console.log("Button Clicked"+str);
  }

  //Not hoisted


  // const actionToBeDone=()={
  
// console.log("Button Clicked")};
  
// };
}

export default FunctionClick;

