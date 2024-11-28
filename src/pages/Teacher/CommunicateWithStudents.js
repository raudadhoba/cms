// src/pages/Teacher/CommunicateWithStudents.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const CommunicateWithStudents = () => {
  return (
    <div className="container mt-5">
      <h3>Communicate with Students</h3>
      <div className="card shadow-sm mb-4">
        <div className="card-body">
          <h5 className="card-title">Send an Announcement</h5>
          <form>
            <div className="mb-3">
              <label htmlFor="announcementTitle" className="form-label">Announcement Title</label>
              <input type="text" className="form-control" id="announcementTitle" placeholder="Enter title" />
            </div>

            <div className="mb-3">
              <label htmlFor="announcementMessage" className="form-label">Message</label>
              <textarea className="form-control" id="announcementMessage" rows="4" placeholder="Type your message here"></textarea>
            </div>

            <div className="mb-3">
              <label htmlFor="selectClass" className="form-label">Select Class</label>
              <select className="form-select" id="selectClass">
                <option value="all">All Students</option>
                <option value="class1">Class 1</option>
                <option value="class2">Class 2</option>
                <option value="class3">Class 3</option>
              </select>
            </div>

            <button type="submit" className="btn btn-primary">Send Announcement</button>
          </form>
        </div>
      </div>

      <div className="card shadow-sm">
        <div className="card-body">
          <h5 className="card-title">Message a Student</h5>
          <form>
            <div className="mb-3">
              <label htmlFor="studentName" className="form-label">Student Name</label>
              <input type="text" className="form-control" id="studentName" placeholder="Enter student name" />
            </div>

            <div className="mb-3">
              <label htmlFor="messageContent" className="form-label">Message</label>
              <textarea className="form-control" id="messageContent" rows="4" placeholder="Type your message here"></textarea>
            </div>

            <button type="submit" className="btn btn-secondary">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CommunicateWithStudents;
