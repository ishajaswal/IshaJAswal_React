// src/components/Greeting.tsx
import React from 'react';

import '../assets/NewCss/Greeting.css';

type GreetingProps = {
  name: string;
};

const Greeting3: React.FC<GreetingProps> = ({ name }) => {
  return (
    <div className="greeting-box">
      <h2>Hello, {name}!</h2>
      <p>Welcome to the React world 🌍</p>
    </div>
  );
};

export default Greeting3;
