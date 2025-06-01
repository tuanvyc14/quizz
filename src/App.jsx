import React from "react";
import Login from "./Login";
import Home from "./Home";
import QuizList from "./QuizList";
import Quiz from "./Quiz";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/quiz-list" element={<QuizList />} />
        <Route path="/quiz/:quizId" element={<Quiz />} />
      </Routes>
    </Router>
  );
}

export default App;