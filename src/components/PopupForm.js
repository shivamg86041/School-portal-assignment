import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import jsPDF from "jspdf";

const PopupForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    studentName: "",
    email: "",
    mobile: "",
    course: "",
    totalMarks: "",
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.studentName) newErrors.studentName = "Name is required.";
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Valid email is required.";
    if (!formData.mobile || !/^\d{10}$/.test(formData.mobile))
      newErrors.mobile = "Mobile number must be 10 digits.";
    if (!formData.course) newErrors.course = "Course is required.";
    if (!formData.totalMarks || isNaN(formData.totalMarks))
      newErrors.totalMarks = "Total marks must be a number.";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const existingData = JSON.parse(localStorage.getItem("marksData")) || [];
    const newData = [
      ...existingData,
      {
        email: formData.email,
        totalMarks: parseInt(formData.totalMarks, 10),
        studentName: formData.studentName,
      },
    ];
    localStorage.setItem("marksData", JSON.stringify(newData));

    generatePDF(formData);
    navigate("/thank-you");
  };

  const generatePDF = (formData) => {
    const doc = new jsPDF();
  
    doc.setFontSize(22);
    doc.setFont("helvetica", "bold");
    doc.text("Student Form Data", 20, 30);

    let yPosition = 50;
  
    doc.setFontSize(16);
    doc.setFont("helvetica", "normal");
  
    const keyValuePairs = [
      { key: "Name", value: formData.studentName },
      { key: "Email", value: formData.email },
      { key: "Mobile", value: formData.mobile },
      { key: "Course", value: formData.course },
      { key: "Total Marks", value: formData.totalMarks },
    ];
  
    keyValuePairs.forEach((pair) => {
      doc.setFont("helvetica", "bold");
      doc.text(`${pair.key}:`, 20, yPosition); 
      doc.setFont("helvetica", "normal");
      doc.text(pair.value, 90, yPosition); 
      yPosition += 10; 
    });
  
    doc.save("form-submission.pdf");
  };

  return (
    <div className="fixed z-30 inset-0 bg-black bg-opacity-50 flex justify-center items-center animate-fadeIn">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md animate-popIn transition-all transform">
        <h2 className="text-xl font-bold text-blue-600 mb-4 text-center animate-slideDown">
          Student Form
        </h2>
        <form onSubmit={handleSubmit}>
          {["studentName", "email", "mobile", "course", "totalMarks"].map(
            (field, idx) => (
              <div className="mb-4" key={idx}>
                <label className="block text-gray-700 mb-2 capitalize">
                  {field.replace(/([A-Z])/g, " $1")}
                </label>
                <input
                  type="text"
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  className={`w-full p-2 border rounded ${
                    errors[field] ? "border-red-500" : "border-gray-300"
                  } transition-all focus:ring focus:ring-primary focus:outline-none`}
                />
                {errors[field] && (
                  <p className="text-red-500 text-sm">{errors[field]}</p>
                )}
              </div>
            )
          )}
          <div className="flex justify-between mt-6">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 transition-transform transform hover:scale-105"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-primary text-white rounded hover:bg-blue-700 transition-transform transform hover:scale-105"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PopupForm;
