import React from 'react';

import "../assets/NewCss/BootStrapAccordian.css"

const faqData = [
  {
    id: 'faq1',
    question: 'What is React?',
    answer: 'React is a JavaScript library for building user interfaces.',
  },
  {
    id: 'faq2',
    question: 'What is a component?',
    answer: 'A component is a reusable piece of UI in React.',
  },
  {
    id: 'faq3',
    question: 'What is useState?',
    answer: 'useState is a React Hook that adds state to functional components.',
  },
];

const BootstrapAccordion = () => {
  return (
    <div className="container mt-4">
      <h2 className="mb-4">FAQs</h2>
      <div className="accordion" id="faqAccordion">
        {faqData.map((item, index) => (
          <div className="accordion-item" key={item.id}>
            <h2 className="accordion-header" id={`heading${item.id}`}>
              <button
                className={`accordion-button ${index !== 0 ? 'collapsed' : ''}`}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#collapse${item.id}`}
                aria-expanded={index === 0 ? 'true' : 'false'}
                aria-controls={`collapse${item.id}`}
              >
                {item.question}
              </button>
            </h2>
            <div
              id={`collapse${item.id}`}
              className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
              aria-labelledby={`heading${item.id}`}
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                {item.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BootstrapAccordion;
