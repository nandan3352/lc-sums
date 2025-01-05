import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import Topics from "./components/Topics";
import Difficulty from "./components/Difficulty";

const App = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <div className={isHomePage ? "min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-indigo-600" : "min-h-screen flex items-center justify-center bg-gray-100"}>
      <Routes>
        <Route
          path="/"
          element={
            <div className="text-center text-white p-6">
              <p className="text-lg mb-6">Choose how you'd like to get questions!</p>
              <div className="flex gap-6 justify-center">
                <Link
                  to="/topics"
                  className="bg-white text-blue-600 px-6 py-3 rounded-full shadow-lg font-medium hover:bg-blue-100"
                >
                  Get Questions from Topics
                </Link>
                <Link
                  to="/difficulty"
                  className="bg-white text-blue-600 px-6 py-3 rounded-full shadow-lg font-medium hover:bg-blue-100"
                >
                  Get Questions Based on Difficulty
                </Link>
              </div>
            </div>
          }
        />
        <Route path="/topics" element={<Topics />} />
        <Route path="/difficulty" element={<Difficulty />} />
      </Routes>
    </div>
  );
};

const Wrapper = () => (
  <Router>
    <App />
  </Router>
);

export default Wrapper;
