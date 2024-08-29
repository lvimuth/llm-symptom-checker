import React, { useState } from "react";

const SymptomForm = ({ onSubmit }) => {
  const [symptoms, setSymptoms] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(symptoms);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        Describe your symptoms:
      </label>
      <textarea
        className="w-full p-2 border border-gray-300 rounded mb-4"
        rows="4"
        value={symptoms}
        onChange={(e) => setSymptoms(e.target.value)}
      />
      <button
        type="submit"
        className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
      >
        Submit
      </button>
    </form>
  );
};

export default SymptomForm;
