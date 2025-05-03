export default function Fruits1(){


  const Fruits1=[
  {
    id:1,
    name:"Orange",
    price: 20,
  },
  {
    id:2,
    name:"Mango",
    price:30,
  },
  {
    id:3,
    name:"Mango",
    price:30,
  }
];


return (

  <div>

  <ul>
  
  
    {Fruits1.map((fruit)=>(

      <li key={fruit.id}>
        {fruit.name}, Rs{fruit.price}{" "}
      
    </li>
  ))}
   
    </ul>
  
  </div>
);
}