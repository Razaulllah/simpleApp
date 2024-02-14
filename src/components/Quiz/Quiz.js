import React, { useState, useEffect } from 'react';
import './Quiz.css';

const questions = [
  {
    id: 1,
    question: 'What is the capital of France?',
    options: ['Berlin', 'Madrid', 'Paris', 'Rome'],
    correctAnswer: 'Paris',
  },
  {
    id: 2,
    question: 'Which planet is known as the Red Planet?',
    options: ['Mars', 'Jupiter', 'Venus', 'Mercury'],
    correctAnswer: 'Mars',
  },
  {
    id: 3,
    question: 'Who is the founder of PTI?',
    options: ['Imran Khan', 'Maryam Nawaz', 'Asfandyar wali khan', 'Bilawal Botto'],
    correctAnswer: 'Imran Khan',
  },
  // Add more questions as needed
];

const QuizApp = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [shuffledOptions, setShuffledOptions] = useState([]);

  useEffect(() => {
    // Shuffle options when the current question changes
    setShuffledOptions(shuffleArray(questions[currentQuestion].options));
  }, [currentQuestion]);

  const shuffleArray = (array) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const handleNextQuestion = () => {
    if (selectedOption === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    setSelectedOption('');

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setQuizCompleted(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedOption('');
    setScore(0);
    setQuizCompleted(false);
  };

  return (
    <div className="Qbody">
      <div className="Qcontainer">
        <h2>Quiz App</h2>
        <hr />

        {quizCompleted ? (
          <>
            <h2>Quiz Completed</h2>
            <p>Your Score: {score}/{questions.length}</p>
            <button onClick={restartQuiz}>Restart Quiz</button>
          </>
        ) : (
          <>
            <h2>{questions[currentQuestion].question}</h2>

            <ul>
              {shuffledOptions.map((option, index) => (
                <li
                  key={index}
                  className={`${
                    selectedOption === option ? 'selected' : ''
                  }`}
                  onClick={() => handleOptionClick(option)}
                >
                  {option}
                </li>
              ))}
            </ul>

            <button onClick={handleNextQuestion}>Next</button>
          </>
        )}
      </div>
    </div>
  );
};

export default QuizApp;
