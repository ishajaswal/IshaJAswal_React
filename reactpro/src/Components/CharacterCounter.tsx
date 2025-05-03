
import React,{useState} from "react";

const CharacterCounter = () => {

  const [text, setText] = useState('');
  
  
  const handleInputChange = (event) => {
    setText(event.target.value); 
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
