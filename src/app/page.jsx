"use client";

import Button from "@/components/Button";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {

  const [name, setName] = useState("");
  const [selectedTopic, setSelectedTopic] = useState("");

  const router = useRouter();

  // Handle name change
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  // Handle topic selection
  const handleTopicChange = (event) => {
    setSelectedTopic(event.target.value);
  };


  const startQuizHandler = () => {
    const obj = {
      name,
      category: selectedTopic,
    };
    console.log("objects", obj);
    sessionStorage.setItem("quizmaniaInit", JSON.stringify(obj));
    router.push("/test");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      <h1 className="text-3xl font-bold mb-4">Welcome to QUIZMania</h1>
      <p className="mb-2">
        Please read all the rules about this quiz before you start.
      </p>
      <p className="font-semibold mb-4">Quiz rules</p>

      {/* Input for user's full name */}
      <div className="mb-6 md:w-[35%] ">
        <p className="text-lg font-medium text-gray-700 mb-2">Full name</p>
        <input
          className="border border-gray-300 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-[#B92B5D] transition-all duration-300 ease-in-out"
          placeholder="Write your name..."
          value={name}
          onChange={handleNameChange}
        />
      </div>

      {/* Radio buttons for selecting a quiz topic */}
      <div className="mb-6">
        <p className="mb-4 text-lg font-medium text-gray-700">
          Please select a topic to continue
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="flex items-center space-x-3">
            <input
              type="radio"
              id="js_basics"
              value="js_basics"
              checked={selectedTopic === "js_basics"}
              onChange={handleTopicChange}
              className="w-5 h-5 accent-[#B92B5D] border-2 border-gray-300 rounded-full transition-all duration-300 ease-in-out"
            />
            <label
              htmlFor="js_basics"
              className="text-lg text-gray-800 cursor-pointer hover:text-[#B92B5D]"
            >
              Javascript Basic
            </label>
          </div>

          <div className="flex items-center space-x-3">
            <input
              type="radio"
              id="angularBasic"
              value="angularBasic"
              checked={selectedTopic === "angularBasic"}
              onChange={handleTopicChange}
              className="w-5 h-5 accent-[#B92B5D] border-2 border-gray-300 rounded-full transition-all duration-300 ease-in-out"
            />
            <label
              htmlFor="angularBasic"
              className="text-lg text-gray-800 cursor-pointer hover:text-[#B92B5D]"
            >
              Angular Basic
            </label>
          </div>

          <div className="flex items-center space-x-3">
            <input
              type="radio"
              id="rjAdvance"
              value="rjAdvance"
              checked={selectedTopic === "rjAdvance"}
              onChange={handleTopicChange}
              className="w-5 h-5 accent-[#B92B5D] border-2 border-gray-300 rounded-full transition-all duration-300 ease-in-out"
            />
            <label
              htmlFor="rjAdvance"
              className="text-lg text-gray-800 cursor-pointer hover:text-[#B92B5D]"
            >
              React.js Advance
            </label>
          </div>

          <div className="flex items-center space-x-3">
            <input
              type="radio"
              id="flutter"
              value="flutter"
              checked={selectedTopic === "flutter"}
              onChange={handleTopicChange}
              className="w-5 h-5 accent-[#B92B5D] border-2 border-gray-300 rounded-full transition-all duration-300 ease-in-out"
            />
            <label
              htmlFor="flutter"
              className="text-lg text-gray-800 cursor-pointer hover:text-[#B92B5D]"
            >
              Flutter
            </label>
          </div>
        </div>
      </div>

      {/* Start Quiz Button */}
      <div className="flex items-start">
        <Button
          onClick={startQuizHandler}
          theme="primary"
          disabled={!name.trim() || !selectedTopic} // Disable if inputs are incomplete
        >
          Start Quiz
        </Button>
      </div>
    </div>
  );
}
