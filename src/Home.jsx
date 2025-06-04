import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md text-center space-y-6">
        <h1 className="text-2xl font-bold">🏠 Trang chủ đào tạo</h1>
        <button onClick={() => navigate("/quiz-list")}
          className="bg-green-600 hover:bg-green-700 w-full text-white font-semibold py-3 rounded-xl">
          📝 Làm bài kiểm tra
        </button>
        <button onClick={() => navigate("/Study")} // chỉnh nhẹ để push lại
          className="bg-yellow-500 hover:bg-yellow-600 w-full text-white font-semibold py-3 rounded-xl">
          📘 Ôn tập kiến thức
        </button>
      </div>
    </div>
  );
};

export default Home;