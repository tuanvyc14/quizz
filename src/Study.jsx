
import React from "react";

function Study() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-10">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
        <h1 className="text-xl font-bold mb-4">📘 Tài liệu ôn tập</h1>
        <ul className="list-disc pl-5 text-blue-700 space-y-2">
          <li>
           <div className="mt-6 border-t pt-4">
  <h2 className="text-lg font-semibold mb-2">📘 Tài liệu ôn tập kiến thức</h2>
  <iframe
    src="/6-buoc-ban-hang.pdf"
    width="100%"
    height="500px"
    title="Tài liệu 6 bước bán hàng"
    className="border rounded"
  />
</div>

          </li>
        </ul>
      </div>
    </div>
  );
}

export default Study;
