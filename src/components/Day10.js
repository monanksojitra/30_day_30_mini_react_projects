import React, { useState, useEffect } from "react";

const Day10 = () => {
  const [quizData, setQuizData] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [answerSelected, setAnswerSelected] = useState(false);

  useEffect(() => {
    // Fetch quiz data from the API
    fetch("https://opentdb.com/api.php?amount=8&type=multiple")
      .then((response) => response.json())
      .then((data) => {
        const questions = data.results.map((result, index) => {
          const options = [...result.incorrect_answers, result.correct_answer];
          return {
            index: index + 1,
            question: result.question,
            options: options.sort(() => Math.random() - 0.5),
            answer: result.correct_answer,
          };
        });
        setQuizData(questions);
      })
      .catch((error) => console.error("Error fetching quiz data:", error));
  }, []);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
    setAnswerSelected(true);
  };

  const handleNextQuestion = () => {
    if (!answerSelected) {
      return;
    }

    if (selectedOption === quizData[currentQuestionIndex].answer) {
      setScore((prevScore) => prevScore + 10);
    }

    setAnswerSelected(false);

    if (currentQuestionIndex + 1 < quizData.length) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      setQuizCompleted(true);
    }
  };

  const handleResetQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedOption("");
    setScore(0);
    setQuizCompleted(false);
  };

  return (
    <div className="container quiz-container">
      <div className="quiz">
        {quizCompleted ? (
          <div className="result btn-group btn-group-sm">
            <h2>Congratulations!</h2>
            <h5 className="my-2 mx-4">Your final score: {score} points</h5>
            <button className="btn btn-primary " onClick={handleResetQuiz}>
              Restart Quiz
            </button>
          </div>
        ) : (
          <>
            {currentQuestionIndex < quizData.length ? (
              <>
                <h1 className="question fs-5">
                  {quizData[currentQuestionIndex].index +
                    ". " +
                    decodeURIComponent(quizData[currentQuestionIndex].question)}
                </h1>
                <ul className="list-group list-group-light">
                  {quizData[currentQuestionIndex].options.map(
                    (option, index) => (
                      <li
                        key={index}
                        className={`list-group-item list-group-item-action px-3 m-1 border-0 ${
                          selectedOption === option
                            ? option === quizData[currentQuestionIndex].answer
                              ? "bg-success text-white"
                              : "bg-danger text-white"
                            : ""
                        }`}
                      >
                        <label
                          htmlFor={`option${index}`}
                          className={`radio-label ${
                            selectedOption === option
                              ? option === quizData[currentQuestionIndex].answer
                                ? "bg-success text-white"
                                : "bg-danger text-white"
                              : ""
                          }`}
                        >
                          {decodeURIComponent(option)}
                          <input
                            type="radio"
                            name="quizOption"
                            className="d-none"
                            id={`option${index}`}
                            value={option}
                            checked={selectedOption === option}
                            onChange={() => handleOptionChange(option)}
                            disabled={answerSelected}
                          />
                        </label>
                      </li>
                    )
                  )}
                </ul>
                <button
                  className="btn btn-primary mt-3"
                  onClick={handleNextQuestion}
                  disabled={!answerSelected}
                >
                  Next
                </button>
              </>
            ) : (
              <div className="result">
                <h2>Quiz Completed!</h2>
                <p>Your final score: {score} points</p>
                <button className="btn btn-primary" onClick={handleResetQuiz}>
                  Restart Quiz
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Day10;
