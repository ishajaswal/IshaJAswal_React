function ChildComponent(props){
  return(
    <div><button type="button" onClick={()=>props.greetHandler("child")}>Greet parent
      </button></div>
  );
}
export default ChildComponent;