





const Greet1=(props)=>{

  // console.log(props);
  return (
<div>
<h1>
 Greetings {props.name}  A.KA. {props.heroName} from functional component
      </h1>
<u>
{props.children}
</u>
</div>
);
};

export default  Greet1;