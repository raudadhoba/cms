// src/pages/Teacher/GradeAssignments.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const GradeAssignments = () => {
  return (
    <div className="container mt-5">
      <h3>Grade Assignments</h3>
      <div className="card shadow-sm mb-4">
        <div className="card-body">
          <h5 className="card-title">Pending Assignments for Grading</h5>
          <ul className="list-group">
            <li className="list-group-item d-flex justify-content-between align-items-center">
              <span>Assignment 1: React Basics - Submitted by John Doe</span>
              <button className="btn btn-primary">Grade</button>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              <span>Assignment 2: Java Spring Boot - Submitted by Jane Smith</span>
              <button className="btn btn-primary">Grade</button>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              <span>Assignment 3: Database Design - Submitted by Mike Johnson</span>
              <button className="btn btn-primary">Grade</button>
            </li>
          </ul>
        </div>
      </div>

      <div className="card shadow-sm">
        <div className="card-body">
          <h5 className="card-title">Grade an Assignment</h5>
          <form>
            <div className="mb-3">
              <label htmlFor="studentName" className="form-label">Student Name</label>
              <input type="text" className="form-control" id="studentName" placeholder="John Doe" readOnly />
            </div>

            <div className="mb-3">
              <label htmlFor="assignmentTitle" className="form-label">Assignment Title</label>
              <input type="text" className="form-control" id="assignmentTitle" placeholder="React Basics" readOnly />
            </div>

            <div className="mb-3">
              <label htmlFor="grade" className="form-label">Grade</label>
              <input type="text" className="form-control" id="grade" placeholder="Enter grade" />
            </div>

            <div className="mb-3">
              <label htmlFor="feedback" className="form-label">Feedback</label>
              <textarea className="form-control" id="feedback" rows="4" placeholder="Provide feedback here"></textarea>
            </div>

            <button type="submit" className="btn btn-success">Submit Grade</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GradeAssignments;
