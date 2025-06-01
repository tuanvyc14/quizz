// src/TestList.jsx
import React from "react";

function TestList({ tests, onSelectTest }) {
  return (
    <div style={{
      minHeight: "100vh",
      background: "#f8fafc",
      padding: "60px 20px 40px 20px",
      boxSizing: "border-box",
      display: "flex",
      justifyContent: "center"
    }}>
      <div style={{ maxWidth: "600px", width: "100%" }}>
        <h2 style={{
          fontSize: "24px",
          marginBottom: "30px",
          fontWeight: "600",
          display: "flex",
          alignItems: "center",
          color: "#1e293b"
        }}>
          📚 <span style={{ marginLeft: "10px" }}>Danh sách bài kiểm tra</span>
        </h2>
        {tests.map((test, index) => (
          <div
            key={index}
            onClick={() => onSelectTest(test)}
            style={{
              display: "flex",
              alignItems: "center",
              background: "#fff",
              padding: "16px",
              marginBottom: "15px",
              borderRadius: "10px",
              cursor: "pointer",
              boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
              transition: "transform 0.1s ease"
            }}
            onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.01)")}
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <span style={{ fontSize: "20px", marginRight: "12px" }}>{test.icon || "📝"}</span>
            <span style={{ fontSize: "16px", fontWeight: 500 }}>{test.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TestList;
