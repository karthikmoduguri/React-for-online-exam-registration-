import React, { useState, useEffect } from "react";
import axios from "axios";
import "../css/ExamsList.css"; // Import CSS

const ExamsList = () => {
  const [exams, setExams] = useState([]);
  const [category, setCategory] = useState("Engineering"); // Default category

  useEffect(() => {
    const fetchExams = async () => {
      try {
        const response = await axios.get("http://localhost:3700/api/v1/exam/getexams");
        setExams(response.data.exams);
      } catch (error) {
        console.error("Error fetching exams:", error);
      }
    };
    fetchExams();
  }, []);

  const filteredExams = exams.filter((exam) => exam.category === category);

  return (
    <div className="exams-container">
      {/* Category Selection */}
      <div className="category-container">
        {["Engineering", "Medical", "Management", "Government Jobs"].map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`category-btn ${category === cat ? "active" : ""}`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Display Exams */}
      <div className="exam-grid">
        {filteredExams.length === 0 ? (
          <p>No exams available for this category.</p>
        ) : (
          filteredExams.map((exam) => (
            <div 
              key={exam._id} 
              className="exam-box"
              onClick={() => window.open(exam.officialWebsite, "_blank")}
            >
              <h3>{exam.name}</h3>
              <p><strong>Eligibility:</strong> {exam.eligibility}</p>
              <p><strong>Exam Date:</strong> {new Date(exam.examDate).toDateString()}</p>
              <p><strong>Deadline:</strong> {new Date(exam.applicationDeadline).toDateString()}</p>
              <p>{exam.description}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ExamsList;
