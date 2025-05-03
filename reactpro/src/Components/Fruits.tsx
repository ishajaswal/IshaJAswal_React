import Fruit from "./Fruit";
import Vegies from "./Vegies";

export default function Fruits(props) {
  const fruits = ["Apple", "Mango", "Banana", "Orange", "Kiwi"];

  const Vegetables = ["Peas", "Cabbage", "Carrot", "LadyFinger", "Potato"];

  // console.log(props);

  if (props.type === "fruits") {
    return (
      <div>
        <Fruit fruitData={fruits}></Fruit>
      </div>
    );
  } else if (props.type === "vegetables") {
    return (
      <div>
        <Vegies vegiesData={Vegetables}></Vegies>
      </div>
    );
  } else {
    return <div>Invalid Type</div>;
  }
}
