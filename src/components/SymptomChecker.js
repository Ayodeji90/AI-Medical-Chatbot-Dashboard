import React, { useState } from "react";

const SymptomChecker = () => {
  const [symptoms, setSymptoms] = useState("");
  const [result, setResult] = useState(null);

  const handleCheckSymptoms = () => {
    // Mock response or call an API
    if (symptoms.toLowerCase().includes("fever")) {
      setResult("You may have a viral infection. Please consult a doctor.");
    } else {
      setResult("Please provide more symptoms for an accurate analysis.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-white via-blue-100 to-blue-200 p-6">
      <h1 className="text-4xl font-bold text-center text-blue-900 mb-6">
        Symptom Checker
      </h1>

      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <textarea
          className="w-full p-4 border rounded-lg mb-4"
          rows="5"
          placeholder="Describe your symptoms here..."
          value={symptoms}
          onChange={(e) => setSymptoms(e.target.value)}
        ></textarea>

        <button
          onClick={handleCheckSymptoms}
          className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-800"
        >
          Check Symptoms
        </button>

        {result && (
          <div className="mt-6 p-4 bg-blue-100 rounded-lg text-blue-800">
            <p>{result}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SymptomChecker;