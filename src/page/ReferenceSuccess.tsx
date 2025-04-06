import { useNavigate } from "react-router-dom";

const ReferenceSuccess = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-md text-center">
        <h2 className="text-2xl font-bold mb-4">Thank You Referee!</h2>
        <p className="text-gray-700 mb-3">
          We appreciate you for taking the time to submit this reference. Your
          feedback helps us make informed decisions about the candidate.
        </p>
        <p className="text-gray-700 mb-6">
          You can close this window to return to your inbox. If you have any
          questions, feel free to contact us.
        </p>
        <button
          onClick={() => navigate("/")}
          className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition duration-200"
        >
          Go Home
        </button>
      </div>
    </div>
  );
};

export default ReferenceSuccess;
