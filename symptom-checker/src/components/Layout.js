import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 p-4 text-white text-center">
        <h1>Symptom Checker & Virtual Health Assistant</h1>
      </header>
      <main className="p-6">{children}</main>
    </div>
  );
};

export default Layout;
