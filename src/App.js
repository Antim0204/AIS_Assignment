// src/App.js
import React, { useState, useEffect } from 'react';
import './App.css';

const QUESTION_DATA = {
  // asking the question
  question: "What is the capital of France?",
  // setting the option
  options: ["Berlin", "Madrid", "Paris", "Rome"],
  // setting the index of the correct option
  correctAnswer: 2 // Index of "Paris"
};

function App() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60); // as asked in assignment setting the timer to 1 minute 
  const [isTimeUp, setIsTimeUp] = useState(false);

  // Timer countdown effect
  useEffect(() => {
    if (timeLeft <= 0) {
      setIsTimeUp(true);
      return;
    }

    const timerId = setInterval(() => {
      setTimeLeft(prevTime => prevTime - 1);
    }, 1000);

    return () => clearInterval(timerId);
  }, [timeLeft]);

  // Handle option selection
  const handleOptionClick = (index) => {
    if (!isSubmitted) {
      setSelectedOption(index);
    }
  };

  // Handle submission
  const handleSubmit = () => {
    if (selectedOption === null) {
      alert("Please select an option before submitting.");
      return;
    }
    setIsSubmitted(true);
  };

  // Handle next (reload the page)
  const handleNext = () => {
    window.location.reload();
  };

  return (
    <div className="App">
      <div className="timer">Time Left: {timeLeft} seconds</div>
      <div className="question">{QUESTION_DATA.question}</div>
      <div className="options">
        {QUESTION_DATA.options.map((option, index) => (
          <div
            key={index}
            className={`option ${getOptionClass(index, selectedOption, isSubmitted, QUESTION_DATA.correctAnswer)}`}
            onClick={() => handleOptionClick(index)}
          >
            {option}
          </div>
        ))}
      </div>
      <button onClick={isSubmitted ? handleNext : handleSubmit}>
        {isSubmitted ? "Next" : "Submit"}
      </button>
      {isTimeUp && <div className="popup">Time is up! Reload the page to try again.</div>}
    </div>
  );
}

// Function to determine the class for each option
function getOptionClass(index, selectedOption, isSubmitted, correctAnswer) {
  if (!isSubmitted) return selectedOption === index ? 'selected' : '';
  if (selectedOption === index) {
    return selectedOption === correctAnswer ? 'correct' : 'incorrect';
  }
  return index === correctAnswer ? 'correct' : '';
}

export default App;
