import Table from "./Table";

const FragmentComp=()=>{
  const data=[
    {name:"Isha Jaswal",age:28,city: "New York"},
    {name:"John ",age:28,city: "New York"},
    {name:"Smith",age:20,city: "London"},
    {name:"liara",age:21,city: "Paris"},
    {name:"kiara",age:18,city: "Sydney"},
];

  return(
    <div>
      <h1>Person Information</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          <Table data={data}/>
        </tbody>
      </table>
    </div>
  );
};
export default FragmentComp;