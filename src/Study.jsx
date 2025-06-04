import React, { useState } from "react";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { Worker } from "@react-pdf-viewer/core";
import { Viewer } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";

function Study() {
  const [showLessons, setShowLessons] = useState(false);
  const [selectedLesson, setSelectedLesson] = useState(null);
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 flex justify-center">
      <div className="bg-white shadow-md rounded-lg w-full max-w-4xl p-4">
        <h1 className="text-2xl font-bold mb-4">📘 Tài liệu ôn tập</h1>

        {/* Nút chính */}
        {!showLessons && (
          <button
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition mb-4"
            onClick={() => setShowLessons(true)}
          >
            Nhân viên bán hàng
          </button>
        )}

        {/* Danh sách bài học */}
        {showLessons && !selectedLesson && (
          <div className="space-y-2">
            <button
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
              onClick={() => setSelectedLesson("quy-trinh")}
            >
              Quy trình bán hàng cơ bản
            </button>
            {/* Có thể thêm các nút bài học khác tại đây */}
          </div>
        )}

        {/* Hiển thị tài liệu */}
        {selectedLesson === "quy-trinh" && (
          <div className="mt-6 h-[80vh] overflow-hidden">
            <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js`}>
              <Viewer
                fileUrl="/6-buoc-ban-hang.pdf"
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
