export default function Fruit({ fruitData }) {
  return (
    <div>
      <ul>
        {fruitData.map((fruit, index) => (

          
          <li key={index}>
            {index}-{fruit}
          </li>
        ))}
      </ul>
    </div>
  );
}


