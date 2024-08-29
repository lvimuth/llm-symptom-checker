import React from "react";

const DiagnosisResult = ({ result }) => {
  return (
    <div className="bg-white p-6 rounded shadow-md mt-4">
      <h2 className="text-gray-700 text-xl font-bold mb-2">
        Possible Diagnosis:
      </h2>
      <p>{result}</p>
    </div>
  );
};

export default DiagnosisResult;
