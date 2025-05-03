import React, { useState } from 'react';
import './FaqAccordion.css'; 

const questions = [
  {
    question: 'What is React?',
    answer: 'React is a JavaScript library for building user interfaces.'
  },
  {
    question: 'What is a component?',
    answer: 'A component is a self contained building block of a React application.'
  },
  {
    question: 'What is JSX?',
    answer: 'JSX is a syntax extension for JavaScript, it looks like HTML but works with React.'
  }
];

function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index); 
  };

  return (
    <div className="faq-container">
      <h2>FAQ</h2>
      {questions.map((faq, index) => (
        <div key={index} className="faq-item">
          <div
            onClick={() => toggleQuestion(index)}
            className="faq-header"
          >
            {faq.question}
          </div>
          <div
            className={`faq-answer ${openIndex === index ? 'open' : ''}`}
          >
            {faq.answer}
          </div>
        </div>
      ))}
    </div>
  );
}

export default FaqAccordion;
