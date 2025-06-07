import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { Worker } from "@react-pdf-viewer/core";
import { Viewer } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";

const libraryItems = [
  {
    id: "quy-trinh",
    title: "Quy trình bán hàng cơ bản",
    type: "pdf",
    file: "/6-buoc-ban-hang.pdf",
    thumbnail: "https://cdn-icons-png.flaticon.com/512/2921/2921222.png",
  },
  {
    id: "honda-sanpham",
    title: "Kiến thức sản phẩm Honda",
    type: "pdf",
    file: "/honda-sanpham.pdf",
    thumbnail: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
  },
];

function Study() {
  const [selectedItem, setSelectedItem] = useState(null);
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 flex justify-center">
      <div className="bg-white shadow-md rounded-lg w-full max-w-5xl p-6">
        {/* Nút quay lại */}
        <button
          onClick={() => navigate("/home")}
          className="mb-4 text-sm text-blue-600 hover:underline"
        >
          ← Quay lại Trang Chủ
        </button>

        <h1 className="text-2xl font-bold mb-6">🏫 Trung Tâm Đào Tạo</h1>

        {!selectedItem && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {libraryItems.map((item) => (
              <div
                key={item.id}
                className="cursor-pointer bg-gray-50 hover:bg-gray-100 p-4 rounded-xl shadow transition"
                onClick={() => setSelectedItem(item)}
              >
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-16 h-16 mb-4 mx-auto"
                />
                <h3 className="text-center text-lg font-semibold">{item.title}</h3>
              </div>
            ))}
          </div>
        )}

        {selectedItem && (
          <div className="h-[80vh] mt-4">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-xl font-semibold">📖 {selectedItem.title}</h2>
              <button
                className="text-sm text-blue-600 hover:underline"
                onClick={() => setSelectedItem(null)}
              >
                ← Quay lại thư viện
              </button>
            </div>
            <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js`}>
              <Viewer
                fileUrl={selectedItem.file}
                plugins={[defaultLayoutPluginInstance]}
              />
            </Worker>
          </div>
        )}
      </div>
    </div>
  );
}

export default Study;
