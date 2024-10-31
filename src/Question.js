import React from 'react';
import './App.css';

function Question({ question, selectedAnswer, onAnswerChange }) {
  return (
    <div className="question-card">
      <h4>{question.question}</h4>
      {question.options.map((option, index) => (
        <div key={index} className="option">
          <input
            type="radio"
            name={`question-${question.id}`}
            checked={selectedAnswer === index}
            onChange={() => onAnswerChange(question.id, index)}
          />
          <label>{option}</label>
        </div>
      ))}
    </div>
  );
}

export default Question;
