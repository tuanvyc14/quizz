import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const features = [
    {
      title: "Kiểm Tra Kiến Thức",
      description: "Kiểm tra kiến thức sau đào tạo",
      icon: "📝",
      action: () => navigate("/quiz-list"),
      bg: "bg-green-600 hover:bg-green-700",
    },
    {
      title: "Trung Tâm Đào Tạo",
      description: "Xem lại các tài liệu và bài học",
      icon: "📘",
      action: () => navigate("/study"),
      bg: "bg-yellow-500 hover:bg-yellow-600",
    },
    // Bạn có thể thêm nhiều mục khác ở đây
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 flex justify-center">
      <div className="w-full max-w-4xl">
        <h1 className="text-2xl font-bold text-center mb-8">🏠 Trang Chủ</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              onClick={feature.action}
              className={`cursor-pointer p-6 rounded-xl text-white ${feature.bg} shadow text-center transition`}
            >
              <div className="text-4xl mb-2">{feature.icon}</div>
              <h2 className="text-xl font-semibold">{feature.title}</h2>
              <p className="text-sm mt-1 opacity-90">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
