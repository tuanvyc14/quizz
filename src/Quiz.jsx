import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "./firebase";

const Quiz = () => {
  const { quizId } = useParams();
  const navigate = useNavigate();
  const [quizData, setQuizData] = useState(null);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const fetchQuiz = async () => {
      const ref = doc(db, "quizzes", quizId);
      const snap = await getDoc(ref);
      if (snap.exists()) setQuizData(snap.data());
    };
    fetchQuiz();
  }, [quizId]);

  const handleAnswer = (i, value) => {
    setAnswers({ ...answers, [i]: value });
  };

  const handleSubmit = () => {
    let result = 0;
    quizData.questions.forEach((q, i) => {
      if (answers[i] === q.correctAnswer) result++;
    });
    setScore(result);
    setSubmitted(true);
  };

  if (!quizData) return <div className="text-center mt-10">Đang tải...</div>;

  return (
    <div className="min-h-screen flex justify-center px-4 bg-gray-100 py-10">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-2xl">
        <h1 className="text-2xl font-bold mb-6">{quizData.title}</h1>
        {submitted && (
          <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 mb-6 font-semibold text-center">
            ✅ Điểm của bạn: {score} / {quizData.questions.length}
          </div>
        )}
        {quizData.questions.map((q, i) => (
          <div key={i} className="mb-6">
            <p className="font-semibold mb-2">Câu {i + 1}: {q.question}</p>
            {q.options.map((opt, idx) => (
              <label key={idx} className="block">
                <input
                  type="radio"
                  name={`q-${i}`}
                  className="mr-2"
                  value={opt}
                  disabled={submitted}
                  checked={answers[i] === opt}
                  onChange={() => handleAnswer(i, opt)}
                />
                {opt}
              </label>
            ))}
          </div>
        ))}
        <div className="flex justify-center gap-4 mt-6">
          {!submitted && (
            <button onClick={handleSubmit} className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
              Nộp bài
            </button>
          )}
          <button onClick={() => navigate("/home")} className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400">
            Về trang chủ
          </button>
        </div>
      </div>
    </div>
  );
};

export default Quiz;