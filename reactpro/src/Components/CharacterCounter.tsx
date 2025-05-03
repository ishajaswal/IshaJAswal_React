// src/components/CharacterCounter.js







import React,{useState} from "react";



const CharacterCounter = () => {
  // State to store the input value
  const [text, setText] = useState('');
  
  // Handler for input change
  const handleInputChange = (event) => {
    setText(event.target.value);  // Update text state on input change
  };

  return (
    <div>
      <h2>Live Character Counter</h2>
      <textarea
        value={text}
        onChange={handleInputChange}
        placeholder="Type something..."
        rows="5"
        cols="50"
      />
      <div>
        <p>Character Count: {text.length}</p>
      </div>
    </div>
  );
};

export default CharacterCounter;
