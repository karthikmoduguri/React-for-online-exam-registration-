import React, { useEffect, useState } from "react";
import axios from "axios";
import "../css/ExamSchedule.css"; // Ensure this CSS file is present

const ExamSchedule = () => {
  const [examData, setExamData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchExamSchedule = async () => {
      try {
        const token = localStorage.getItem("token"); 
        console.log("Token:", token);

        const response = await axios.get("http://localhost:3700/api/v1/exam/myexam", {
          headers: { Authorization: `Bearer ${token}` }
        });

        console.log("API Response:", response.data); // Debugging

        setExamData(response.data.examDetails); // Access `examDetails` directly
      } catch (err) {
        setError("Failed to fetch exam schedule");
      } finally {
        setLoading(false);
      }
    };

    fetchExamSchedule();
  }, []);

  return (
    <div className="exam-container">
      <h2>Exam Schedule</h2>

      {loading ? (
        <p>Loading exam schedule...</p>
      ) : error ? (
        <p className="error">{error}</p>
      ) : !examData ? (
        <p>No exam schedule available.</p>
      ) : (
        <table className="exam-table">
          <thead>
            <tr>
              <th>Exam Name</th>
              <th>Exam Date</th>
              <th>Exam Center</th>
              <th>Candidate</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            <tr key={examData._id}>
              <td>{examData.examName}</td>
              <td>{new Date(examData.examDate).toLocaleDateString()}</td>
              <td>{examData.examCenter}</td>
              <td>{examData.fullname}</td>
              <td>{examData.phone}</td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ExamSchedule;
