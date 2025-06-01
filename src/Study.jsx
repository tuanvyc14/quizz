import React from "react";

function Study() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-10">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-4xl">
        <h1 className="text-2xl font-bold mb-6">📘 Tài liệu ôn tập</h1>

        <h2 className="text-lg font-semibold mb-4">Tài liệu: 6 BƯỚC BÁN HÀNG</h2>

        <div className="w-full" style={{ height: "80vh", overflow: "auto" }}>
          <iframe
            src="/6-buoc-ban-hang.pdf"
            title="Tài liệu 6 bước bán hàng"
            className="w-full h-full border rounded shadow"
          />
        </div>
      </div>
    </div>
  );
}

export default Study;
