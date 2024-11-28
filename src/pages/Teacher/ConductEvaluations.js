// src/pages/Teacher/ConductEvaluations.js
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ConductEvaluations = () => {
  const [evaluationData, setEvaluationData] = useState({
    courseName: '',
    feedback: '',
  });
  const [evaluations, setEvaluations] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEvaluationData({
      ...evaluationData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (evaluationData.courseName && evaluationData.feedback) {
      setEvaluations([...evaluations, evaluationData]);
      setEvaluationData({ courseName: '', feedback: '' });
    }
  };

  return (
    <div className="container mt-5">
      <h3>Conduct Evaluations</h3>
      <div className="card shadow-sm mb-4">
        <div className="card-body">
          <h5 className="card-title">Course Evaluation Form</h5>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="courseName" className="form-label">Course Name</label>
              <input
                type="text"
                className="form-control"
                id="courseName"
                name="courseName"
                placeholder="Enter course name"
                value={evaluationData.courseName}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="feedback" className="form-label">Feedback</label>
              <textarea
                className="form-control"
                id="feedback"
                name="feedback"
                rows="4"
                placeholder="Type your feedback here"
                value={evaluationData.feedback}
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="btn btn-primary">Submit Evaluation</button>
          </form>
        </div>
      </div>

      <div className="card shadow-sm">
        <div className="card-body">
          <h5 className="card-title">Submitted Evaluations</h5>
          {evaluations.length === 0 ? (
            <p className="card-text">No evaluations submitted yet.</p>
          ) : (
            <ul className="list-group">
              {evaluations.map((evaluation, index) => (
                <li key={index} className="list-group-item">
                  <strong>{evaluation.courseName}</strong>: {evaluation.feedback}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default ConductEvaluations;
