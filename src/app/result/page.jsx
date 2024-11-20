"use client";
import LowScore from "@/components/LowScore";
import HighScore from "@/components/HighScore";
import React from "react";

const page = () => {
  const quizmaniaResult = JSON.parse(sessionStorage.getItem("quizmaniaResult"));
  const quizmaniaResultPercantage = JSON.parse(
    sessionStorage.getItem("quizmaniaResultPercantage")
  );
console.log("quizmaniaResultPercantage",quizmaniaResultPercantage)
  console.log("quizmaniaResult",quizmaniaResult)
  return (
    <div>
      {quizmaniaResultPercantage < 50 ? (
        <LowScore
          quizmaniaResult={quizmaniaResult}
          quizmaniaResultPercantage={quizmaniaResultPercantage}
        />
      ) : (
        <HighScore
          quizmaniaResult={quizmaniaResult}
          quizmaniaResultPercantage={quizmaniaResultPercantage}
        />
      )}
    </div>
  );
};

export default page;
