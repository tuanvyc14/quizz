import React from "react";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { Worker } from "@react-pdf-viewer/core";
import { Viewer } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";

function Study() {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 flex justify-center">
      <div className="bg-white shadow-md rounded-lg w-full max-w-4xl p-4">
        <h1 className="text-2xl font-bold mb-4">📘 Tài liệu ôn tập</h1>
        <h2 className="text-lg font-semibold mb-4">Tài liệu: 6 BƯỚC BÁN HÀNG</h2>

        <div className="h-[80vh] overflow-hidden">
          <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js`}>
            <Viewer
              fileUrl="/6-buoc-ban-hang.pdf"
              plugins={[defaultLayoutPluginInstance]}
            />
          </Worker>
        </div>
      </div>
    </div>
  );
}

export default Study;
