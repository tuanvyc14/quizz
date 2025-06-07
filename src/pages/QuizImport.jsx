import { getAuth } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import * as XLSX from "xlsx";

function QuizImport() {
  const [quizData, setQuizData] = useState(null);
  const [title, setTitle] = useState("");
  const [createdBy, setCreatedBy] = useState("");
  const db = getFirestore();

  // 🔐 Lấy tên từ tài khoản Firebase
  useEffect(() => {
    const auth = getAuth();
    const user = auth.currentUser;
    if (user) {
      const name = user.displayName || user.email || "Người dùng ẩn danh";
      setCreatedBy(name);
    }
  }, []);

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    const data = await file.arrayBuffer();
    const workbook = XLSX.read(data);
    const worksheet = workbook.Sheets[workbook.SheetNames[0]];
    const jsonData = XLSX.utils.sheet_to_json(worksheet);

    const questions = jsonData.map((row) => ({
      question: row["Câu hỏi"],
      options: {
        A: row["A"],
        B: row["B"],
        C: row["C"],
        D: row["D"],
      },
      answer: row["Đáp án đúng"],
    }));

    setQuizData(questions);
  };

  const handleSave = async () => {
    const quizId = title.toLowerCase().replace(/\s+/g, "-");
    const savedQuiz = {
      quiz_id: quizId,
      title,
      created_by: createdBy,
      questions: quizData,
    };

    try {
      await setDoc(doc(db, "quizzes", quizId), savedQuiz);
      alert("✅ Đã lưu bài kiểm tra vào Firestore thành công!");
    } catch (error) {
      console.error("❌ Lỗi khi lưu Firestore:", error);
      alert("❌ Lưu thất bại, xem console để biết chi tiết.");
    }
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">📥 Nhập bài kiểm tra từ Excel</h1>

      <input
        type="file"
        accept=".xlsx"
        onChange={handleFileUpload}
        className="mb-4"
      />

      {quizData && (
        <>
          <input
            type="text"
            placeholder="Nhập tên bài kiểm tra"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="block w-full border px-3 py-2 mb-3 rounded"
          />
          <input
            type="text"
            value={createdBy}
            disabled
            className="block w-full border px-3 py-2 mb-3 rounded bg-gray-100 text-gray-600"
          />
          <button
            onClick={handleSave}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            💾 Lưu bài kiểm tra
          </button>

          <div className="mt-6">
            <h2 className="text-lg font-semibold mb-2">📑 Nội dung bài kiểm tra</h2>
            {quizData.map((q, idx) => (
              <div key={idx} className="border p-4 mb-3 rounded shadow-sm">
                <strong>Câu {idx + 1}:</strong> {q.question}
                <ul className="list-disc pl-6 mt-2">
                  {Object.entries(q.options).map(([key, value]) => (
                    <li key={key}>
                      <strong>{key}:</strong> {value}
                    </li>
                  ))}
                </ul>
                <p className="mt-1 text-green-600">✅ Đáp án đúng: {q.answer}</p>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default QuizImport;
