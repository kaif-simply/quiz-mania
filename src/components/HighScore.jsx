import Image from "next/image";
import Button from "./Button";
import { useRouter } from "next/navigation";
export default function AboutPage({
  quizmaniaResult,
  quizmaniaResultPercantage,
}) {
    const router = useRouter();
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white shadow-lg rounded-lg p-6 text-center w-96">
        <div className="flex justify-center mb-4">
          <div className="mb-6 flex justify-center">
            <div className=" p-3 rounded-full">
              <Image width={50} height={50} alt="image" src={"/Frame 31.png"} />
            </div>
          </div>
        </div>
        <h1 className="text-xl font-semibold text-gray-800 mb-2">
          CONGRATULATION
        </h1>
        <p className="text-gray-500 mb-4">
          You successfully completed the Quiz and holds
        </p>
        <h2 className="text-3xl font-bold text-green-600 mb-4">
          {quizmaniaResultPercantage || 0}%
        </h2>
        <p className="text-lg text-gray-700 font-medium mb-6">Great job!</p>
        <div className="mb-4">
          <p className="text-gray-500">Out of 10 questions</p>
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
        </div>
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
