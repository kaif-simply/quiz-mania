"use client";
import Button from "@/components/Button";
import { allQus } from "@/constant/qusData";
import { useRouter } from "next/navigation";
import { Result } from "postcss";
import React, { useEffect, useState } from "react";

const Test = () => {
  const allQusData = allQus;
  console.log("allQusData", allQusData);
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [timer, setTimer] = useState(10); // Set initial timer to 10 seconds
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const router = useRouter();

  const [result, setResult] = useState({
    correct: 0,
    incorrect: 0,
    skip: 0,
  });

  const [finalPage, setFinalPage] = useState(false);

  useEffect(() => {
    const quizmaniaInit = JSON.parse(sessionStorage.getItem("quizmaniaInit"));

    if (quizmaniaInit) {
      console.log("quizmaniaInit", quizmaniaInit);
      setQuestions(extractQuestionsByCategory(quizmaniaInit?.category));
    } else {
      console.log("No data found in sessionStorage for quizmaniaInit");
    }
  }, []);

  useEffect(() => {
    if (questions.length > 0) {
      setCurrentQuestion(questions[currentQuestionIndex]);
      setTimer(10); 
    }
  }, [currentQuestionIndex, questions]);

  useEffect(() => {
    // Start the timer when a new question is displayed
    const interval = setInterval(() => {
      setTimer((prevTime) => {
        if (prevTime === 1) {
          clearInterval(interval);
        }
        return prevTime - 1;
      });
    }, 1000);

    // Cleanup interval when component unmounts or timer updates
    return () => clearInterval(interval);
  }, [currentQuestionIndex]);

  useEffect(() => {
    if (timer === 0) {
      if (currentQuestionIndex === questions.length - 1) {
        handleFinish();
      } else {
        handleNext();
      }
    }
  }, [timer]);

  function extractQuestionsByCategory(categoryId) {
    const category = allQusData?.categories?.find(
      (item) => item.id === categoryId
    );

    return category ? category.questions : [];
  }

  const handleNext = () => {
    
    if (selectedOption !== null || timer === 0) {
      updateResult(); 
      setSelectedOption(null); 
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handleSkip = () => {
    // Update result for skipped questions
    if (currentQuestionIndex === questions.length - 1) {
      handleFinish();
    } else {
      setResult((prevResult) => ({
        ...prevResult,
        skip: prevResult.skip + 1,
      }));
      setSelectedOption(null);
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    }
  };

  const moveToFinalPage = () => {
    
    const totalQuestions = questions.length;

  
    const correctAnswers = result.correct; 
    const percentage = (correctAnswers / totalQuestions) * 100;

   
  

    sessionStorage.setItem("quizmaniaResultPercantage", percentage);
    console.log("innser result", result);
    sessionStorage.setItem("quizmaniaResult", JSON.stringify(result));
    router.push("/result");
  };

  const handleFinish = () => {
    setFinalPage(true);
    updateResult();
  };

  console.log("result", result);

  // Method to update points
  const updateResult = () => {
    console.log("selectedOption", selectedOption);
    if (selectedOption === null) {
      // If no answer is selected, consider it as incorrect (timed out)
      setResult((prevResult) => ({
        ...prevResult,
        skip: prevResult.skip + 1,
      }));
    } else {
      // Extract the first character from the selected option, e.g., "A", "B", "C", or "D"
      const selectedIndex = selectedOption.split(". ")[0]; // Get the first character (e.g., "A", "B")

      // Check if the selected answer matches the correct answer
      if (selectedIndex === currentQuestion.correctAnswer) {
        setResult((prevResult) => ({
          ...prevResult,
          correct: prevResult.correct + 1,
        }));
      } else {
        setResult((prevResult) => ({
          ...prevResult,
          incorrect: prevResult.incorrect + 1,
        }));
      }
    }
  };

  const formatTimer = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes < 10 ? "0" : ""}${minutes}:${
      seconds < 10 ? "0" : ""
    }${seconds}`;
  };

  return (
    <div className="flex items-center justify-center p-4 mt-[5em]  font-sans text-center">
      {currentQuestion ? (
        finalPage ? (
          <Button onClick={moveToFinalPage}>Show Result</Button>
        ) : (
          <div>
            <div className="flex justify-end text-lg font-semibold ">
              <span className="bg-[#E9E8E3] p-1">{formatTimer(timer)}</span>
            </div>
            <div className="flex justify-between mb-5">
              <h2 className="text-2xl font-semibold">{`Q${
                currentQuestionIndex + 1
              }: ${currentQuestion.question}`}</h2>
            </div>
            <ul className="list-none p-0 m-0">
              {currentQuestion.options.map((option, index) => (
                <li key={index} className="mb-4 border-1">
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="radio"
                      name={`question-${currentQuestionIndex}`}
                      value={option}
                      onChange={() => setSelectedOption(option)}
                      checked={selectedOption === option}
                      className="w-5 h-5 border-2 border-[#B92B5D] rounded-full bg-white checked:bg-[#B92B5D] checked:border-[#B92B5D] focus:ring-0 transition duration-200 ease-in-out"
                    />
                    <span className="text-lg">{option}</span>
                  </label>
                </li>
              ))}
            </ul>

            <div className="mt-5 space-x-3">
              {currentQuestionIndex === questions.length - 1 ? (
                <Button
                  onClick={handleFinish}
                  theme="primary"
                  className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                >
                  Finish
                </Button>
              ) : (
                <Button
                  onClick={handleNext}
                  disabled={selectedOption === null && timer > 0}
                  theme="primary"
                  className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-blue-300"
                >
                  Next
                </Button>
              )}
              <Button
                onClick={handleSkip}
                theme="secondary"
                className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
              >
                Skip
              </Button>
            </div>
          </div>
        )
      ) : (
        <h2 className="text-xl font-semibold">No more questions available!</h2>
      )}
    </div>
  );
};

export default Test;
