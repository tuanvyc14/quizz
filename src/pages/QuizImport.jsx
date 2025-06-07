import React, { useState } from "react";
import * as XLSX from "xlsx";

function QuizImport() {
  const [quiz, setQuiz] = useState(null);

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    const data = await file.arrayBuffer();
    const workbook = XLSX.read(data);
    const worksheet = workbook.Sheets[workbook.SheetNames[0]];
    const jsonData = XLSX.utils.sheet_to_json(worksheet);

    const converted = jsonData.map((row) => ({
      question: row["Câu hỏi"],
      options: [row["A"], row["B"], row["C"], row["D"]],
      answer: ["A", "B", "C", "D"].indexOf(row["Đáp án đúng"]),
    }));

    setQuiz({
      quiz_id: "imported-quiz",
      title: "Bài kiểm tra nhập từ Excel",
      questions: converted,
    });
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">📥 Nhập bài kiểm tra từ Excel</h1>
      <input
        type="file"
        accept=".xlsx"
        onChange={handleFileUpload}
        className="mb-6"
      />

      {quiz && (
        <div>
          <h2 className="text-lg font-semibold mb-2">{quiz.title}</h2>
          {quiz.questions.map((q, idx) => (
            <div key={idx} className="mb-4 border p-4 rounded shadow">
              <strong>Câu {idx + 1}:</strong> {q.question}
              <ul className="list-disc pl-6 mt-2">
                {q.options.map((opt, i) => (
                  <li key={i}>{opt}</li>
                ))}
              </ul>
              <p className="mt-1 text-green-600">
                ✅ Đáp án đúng: {q.options[q.answer]}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default QuizImport;
