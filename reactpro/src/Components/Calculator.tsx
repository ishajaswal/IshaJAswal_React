import React, { useState } from "react";
// Import the CSS file
import "../assets/NewCss/Calculator.css";

const App: React.FC = () => {
  const [num1, setNum1] = useState<number>(0);
  const [num2, setNum2] = useState<number>(0);
  const [result, setResult] = useState<number | null>(null);

  const handleAddition = () => setResult(num1 + num2);
  const handleSubtraction = () => setResult(num1 - num2);
  const handleMultiplication = () => setResult(num1 * num2);
  const handleDivision = () => {
    if (num2 === 0) {
      alert("Cannot divide by zero");
      return;
    }
    setResult(num1 / num2);
  };

  return (
    <div className="container">
      <h2 className="heading">Simple Calculator</h2>
      <div className="input-container">
        <input
          className="input"
          type="number"
          value={num1}
          onChange={(e) => setNum1(parseFloat(e.target.value))}
          placeholder="Enter first number"
        />
        <input
          className="input"
          type="number"
          value={num2}
          onChange={(e) => setNum2(parseFloat(e.target.value))}
          placeholder="Enter second number"
        />
      </div>
      <div className="button-container">
        <button className="button" onClick={handleAddition}>+</button>
        <button className="button" onClick={handleSubtraction}>-</button>
        <button className="button" onClick={handleMultiplication}>×</button>
        <button className="button" onClick={handleDivision}>÷</button>
      </div>
      <br />
      {result !== null && <h3 className="result">Result: {result}</h3>}
    </div>
  );
};

export default App;
