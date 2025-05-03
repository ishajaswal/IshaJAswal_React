import React, { useState } from "react";

const Form = () => {
  let [username, setUsername] = useState("");
  const [comments, setComments] = useState("");
  const [color, setColor] = useState("red");

  const handleUsernameChange = (event) => {
    console.log(event);
    setUsername(event.target.value);
  };
  const handleCommentsChange = (event) => {
    setComments(event.target.value);
  };
  const handleSubmit = (event) => {
    alert(`${username},${comments},${color}`);
    event.preventDefault();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username</label>
          <input value={username} type="text" onChange={handleUsernameChange} />
        </div>
        <div>
          <label>Comments</label>
          <textarea value={comments} onChange={handleCommentsChange} />
        </div>
        <div>
          <select value={color} onChange={(e) => setColor(e.target.value)}>
            <option selected disabled>
              Choose Color
            </option>

            <option value="red">Red</option>
            <option value="blue">Blue</option>
            <option value="Green">Green</option>
          </select>
        </div>
        <div>
          <input type="submit" value="submit" />
        </div>
      </form>

      <button
        onClick={() => {
          setUsername((username = "Isha Jaswal"));
        }}
      >
        SetData
      </button>
    </div>
  );
};
export default Form;
