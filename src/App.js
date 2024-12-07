import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import MarksOverview from "./pages/MarksOverview";
import AboutUs from "./pages/Aboutus";
import ThankYou from "./pages/ThankYou";

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <main className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/marks-overview" element={<MarksOverview />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/thank-you" element={<ThankYou />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
};

export default App;
