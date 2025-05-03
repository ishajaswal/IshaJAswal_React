import React, { useState } from "react";



const FormTask = () => {
  const [username, setUsername] = useState("");
  const [comments, setComments] = useState("");
  const [color, setColor] = useState("red");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleCommentsChange = (event) => {
    setComments(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  
    const formData = {
      username,
      comments,
      color,
    };
  
    alert(`${username}, ${comments}, ${color}`);

  
    console.log("Form Data Submitted:", formData);
  };
  

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>

        <div>
          <label>Comments</label>
          <textarea value={comments} onChange={handleCommentsChange} />
        </div>
        <div>
          <label>Favorite Color</label>
          <select value={color} onChange={(e) => setColor(e.target.value)}>
            <option value="" disabled>
              Choose Color
            </option>
            <option value="red">Red</option>
            <option value="blue">Blue</option>
            <option value="green">Green</option>
          </select>
        </div>

        <div>
          <input type="submit" value="Submit" />
        </div>
      </form>

      <button onClick={() => setUsername("Isha Jaswal")}>SetData</button>
    </div>
  );
};

export default Form;
