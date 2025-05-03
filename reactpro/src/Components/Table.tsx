import React from "react";

const Table=({data})=>{
  
  return(
    <>
    {data.map((entry, index) =>(
      <tr key={index}>
        <td>{entry.name}</td>
        <td>{entry.age}</td>
        <td>{entry.city}</td>
      </tr>
    ))}
    </>
  );
};
export default Table;