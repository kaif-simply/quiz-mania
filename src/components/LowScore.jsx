import Image from "next/image";
import React from "react";
import Button from "./Button";
import { useRouter } from "next/navigation";

function LowScore({ quizmaniaResult, quizmaniaResultPercantage }) {
  console.log("quizmaniaResult?.skip", quizmaniaResult);
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center mt-[5em] px-4">
      <div className="text-center bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <div className="mb-6 flex justify-center">
          <div className=" p-3 rounded-full">
            <Image width={50} height={50} alt="image" src={"/Group.png"} />
          </div>
        </div>

        <p className="text-gray-700 text-lg mb-4">
          You successfully completed the Quiz but you need to
        </p>
        <h2 className="text-3xl font-semibold text-blue-600 mb-4">
          KEEP PRACTICING!
        </h2>

        <h3 className="text-xl font-medium text-gray-800 mb-2">Your Score</h3>
        <h1 className="text-4xl font-bold text-red-500 mb-4">
          {quizmaniaResultPercantage || 0}%
        </h1>

        <div className="flex justify-around text-sm text-gray-700 mt-2">
          <span className="text-green-600">
            {quizmaniaResult?.correct || 0} Correct
          </span>
          <span className="text-red-600">
            {quizmaniaResult?.incorrect || 0} Incorrect
          </span>
          <span className="text-gray-500">
            {quizmaniaResult?.skip || 0} Not answered
          </span>
        </div>

        {/* Retake Quiz Button */}
        <div className="mt-6">
          <Button
            onClick={() => {
              sessionStorage?.clear("quizmaniaInit");
              sessionStorage?.clear("quizmaniaResult");
              sessionStorage?.clear("quizmaniaResultPercantage");
              router.push("/");
            }}
            theme="secondary"
          >
            Retake Quiz
          </Button>
        </div>
      </div>
    </div>
  );
}

export default LowScore;
