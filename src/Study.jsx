import React from "react";

function Study() {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 flex justify-center">
      <div className="bg-white shadow-md rounded-lg w-full max-w-4xl p-4">
        <h1 className="text-2xl font-bold mb-4">📘 Tài liệu ôn tập</h1>
        <h2 className="text-lg font-semibold mb-4">Tài liệu: 6 BƯỚC BÁN HÀNG</h2>

        <div className="w-full" style={{ height: "80vh" }}>
          <iframe
            src="/6-buoc-ban-hang.pdf"
            title="Tài liệu 6 bước bán hàng"
            style={{
              width: "100%",
              height: "100%",
              border: "1px solid #ccc",
              borderRadius: "8px",
              overflow: "auto"
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Study;
