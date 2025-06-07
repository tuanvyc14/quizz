import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./Login";
import Home from "./Home";
import QuizList from "./QuizList";
import Quiz from "./Quiz";
import Study from "./Study";
import QuizImport from "./pages/QuizImport"; // ✅ dòng mới để import trang Import Excel

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/quiz-list" element={<QuizList />} />
        <Route path="/quiz/:quizId" element={<Quiz />} />
        <Route path="/study" element={<Study />} />
        <Route path="/quiz-import" element={<QuizImport />} /> {/* ✅ dòng mới */}
      </Routes>
    </Router>
  );
}

export default App;
