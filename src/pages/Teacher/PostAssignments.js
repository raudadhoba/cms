// src/pages/Teacher/PostAssignments.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const PostAssignments = () => {
  return (
    <div className="container mt-5">
      <h3>Post Assignments</h3>
      <div className="card shadow-sm mb-4">
        <div className="card-body">
          <h5 className="card-title">Create New Assignment</h5>
          <form>
            <div className="mb-3">
              <label htmlFor="assignmentTitle" className="form-label">Assignment Title</label>
              <input type="text" className="form-control" id="assignmentTitle" placeholder="Enter title" />
            </div>

            <div className="mb-3">
              <label htmlFor="assignmentDescription" className="form-label">Assignment Description</label>
              <textarea className="form-control" id="assignmentDescription" rows="4" placeholder="Enter description"></textarea>
            </div>

            <div className="mb-3">
              <label htmlFor="dueDate" className="form-label">Due Date</label>
              <input type="date" className="form-control" id="dueDate" />
            </div>

            <button type="submit" className="btn btn-primary">Post Assignment</button>
          </form>
        </div>
      </div>

      <div className="card shadow-sm">
        <div className="card-body">
          <h5 className="card-title">Recent Assignments</h5>
          <ul className="list-group">
            <li className="list-group-item">Assignment 1: React Basics - Due: 2024-10-20</li>
            <li className="list-group-item">Assignment 2: Java Spring Boot - Due: 2024-10-25</li>
            <li className="list-group-item">Assignment 3: Database Design - Due: 2024-11-01</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PostAssignments;
