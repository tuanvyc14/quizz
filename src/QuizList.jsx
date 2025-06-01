
import React from "react";
import { useNavigate } from "react-router-dom";

const quizData = [
  { id: "quiz1", name: "Kiểm tra kiến thức sản phẩm", icon: "🔍" },
  { id: "quiz2", name: "Bài kiểm tra định kỳ tháng 6", icon: "📄" },
  { id: "quiz3", name: "Trắc nghiệm tình huống xử lý", icon: "💬" }
];

function QuizList() {
  const navigate = useNavigate();

  const handleClick = (quizId) => {
    navigate(`/quiz/${quizId}`);
  };

  return (
    <div className="min-h-screen flex items-start justify-center bg-gray-100 py-10">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
        <h1 className="text-xl font-bold mb-4 flex items-center gap-2">
          📚 Danh sách bài kiểm tra
        </h1>
        {quizData.map((quiz) => (
          <div
            key={quiz.id}
            className="cursor-pointer bg-gray-50 hover:bg-gray-100 px-4 py-2 rounded mb-2 flex items-center gap-2 border"
            onClick={() => handleClick(quiz.id)}
          >
            <span>{quiz.icon}</span> {quiz.name}
          </div>
        ))}
      </div>
    </div>
  );
}

export default QuizList;
