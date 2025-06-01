
import React from "react";

function Study() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-10">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
        <h1 className="text-xl font-bold mb-4">📘 Tài liệu ôn tập</h1>
        <ul className="list-disc pl-5 text-blue-700 space-y-2">
          <li>
            <a
              href="/6-buoc-ban-hang.pptx"
              download
              className="underline hover:text-blue-500"
            >
              📄 6 BƯỚC BÁN HÀNG (PPTX)
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Study;
