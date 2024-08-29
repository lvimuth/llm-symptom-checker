import React, { useState } from "react";
import Layout from "./components/Layout";
import SymptomForm from "./components/SymptomForm";
import DiagnosisResult from "./components/DiagnosisResult";

function App() {
  const [diagnosis, setDiagnosis] = useState("");

  const handleSymptomSubmit = (symptoms) => {
    // Placeholder for API call to get diagnosis
    const result = `Based on your symptoms "${symptoms}", here are some possible conditions...`;
    setDiagnosis(result);
  };

  return (
    <Layout>
      <SymptomForm onSubmit={handleSymptomSubmit} />
      {diagnosis && <DiagnosisResult result={diagnosis} />}
    </Layout>
  );
}

export default App;
