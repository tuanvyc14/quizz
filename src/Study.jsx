import React from "react";

function Study() {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 flex justify-center">
      <div className="bg-white shadow-md rounded-lg w-full max-w-4xl p-4">
        {/* Tiêu đề */}
        <h1 className="text-2xl font-bold mb-4">📘 Tài liệu ôn tập</h1>
        <h2 className="text-lg font-semibold mb-4">Tài liệu: 6 BƯỚC BÁN HÀNG</h2>

        {/* PDF Viewer có cuộn ngang trên mobile */}
        <div className="w-full overflow-x-auto">
          <div className="min-w-[900px] h-[100vh]">
            <iframe
              src="/6-buoc-ban-hang.pdf"
              title="Tài liệu 6 bước bán hàng"
              className="w-full h-full rounded-md"
              style={{
                border: "1px solid #ccc",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Study;
