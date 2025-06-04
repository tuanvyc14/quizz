import React from "react";

function Study() {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 flex justify-center">
      <div className="bg-white shadow-md rounded-lg w-full max-w-4xl p-4">
        {/* Tiêu đề */}
        <h1 className="text-2xl font-bold mb-4">📘 Tài liệu ôn tập</h1>
        <h2 className="text-lg font-semibold mb-4">Tài liệu: 6 BƯỚC BÁN HÀNG</h2>

        {/* PDF hiển thị bằng Google Docs Viewer */}
        <iframe
          src="https://docs.google.com/gview?url=https://quizz-git-main-tuanvypros-projects.vercel.app/6-buoc-ban-hang.pdf&embedded=true"
          title="Tài liệu 6 bước bán hàng"
          className="w-full"
          style={{
            height: "100vh",
            border: "1px solid #ccc",
            borderRadius: "8px",
          }}
        />
      </div>
    </div>
  );
}

export default Study;
