import React from "react";

const ThankYou = () => {
  return (
    <div className="container mx-auto text-center py-20 animate-fadeIn">
      <h1 className="text-4xl font-bold text-primary mb-6">Thank You!</h1>
      <p className="text-lg text-gray-600">
        Your form has been successfully submitted. Your PDF has been downloaded.
      </p>
    </div>
  );
};

export default ThankYou;
