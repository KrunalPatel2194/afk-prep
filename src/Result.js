import React from 'react';
import './App.css';

function Result({ questions, answers }) {
  const correctAnswers = questions.filter((q, index) => q.answer === answers[index]);

  return (
    <div className="result-container">
      <h2>Your Results</h2>
      <p>You got {correctAnswers.length} out of {questions.length} correct.</p>

      {questions.map((q, index) => (
        <div key={q.id} className="result-card">
          <h4>{q.question}</h4>
          <p>
            <strong>Your answer:</strong> {q.options[answers[index]] || "Not answered"}
            <br />
            <strong>Correct answer:</strong> {q.options[q.answer]}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Result;
