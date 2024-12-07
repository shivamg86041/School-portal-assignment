import React, { useState } from "react";
import PopupForm from "../components/PopupForm";

const Home = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="container mx-auto text-center py-20 animate-slideDown">
      <h1 className="text-4xl font-bold text-primary mb-6 tracking-wide animate-fadeIn">
        Welcome to the School Portal
      </h1>
      <p className="text-lg text-gray-600 mb-6">
        Click below to fill the form and download your PDF.
      </p>
      <button
        onClick={() => setShowForm(true)}
        className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-blue-700 transition-transform transform hover:scale-105"
      >
        Download PDF
      </button>
      {showForm && <PopupForm onClose={() => setShowForm(false)} />}
    </div>
  );
};

export default Home;
