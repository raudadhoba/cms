// src/pages/Student/StudentDashboard.js

import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const StudentDashboard = () => {
  return (
    <div className="container mt-5">
      <h2 className="mb-4">Student Dashboard</h2>
      <p>Welcome to the student dashboard! Here you can manage your courses, view grades, and more.</p>
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Course Enrollment</h5>
              <p className="card-text">Enroll in new courses and manage your schedule.</p>
              <Link to="course-enrollment" className="btn btn-primary">Go to Course Enrollment</Link>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">View Grades</h5>
              <p className="card-text">Check your grades for all completed courses.</p>
              <Link to="view-grades" className="btn btn-primary">Go to View Grades</Link>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Check Attendance</h5>
              <p className="card-text">Monitor your attendance records for each class.</p>
              <Link to="check-attendance" className="btn btn-primary">Go to Check Attendance</Link>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Access Course Materials</h5>
              <p className="card-text">View and download materials for your courses.</p>
              <Link to="access-course-materials" className="btn btn-primary">Go to Access Course Materials</Link>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Submit Assignments</h5>
              <p className="card-text">Submit your assignments and projects online.</p>
              <Link to="submit-assignments" className="btn btn-primary">Go to Submit Assignments</Link>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Participate Discussions</h5>
              <p className="card-text">Join discussions with peers and instructors.</p>
              <Link to="participate-discussions" className="btn btn-primary">Go to Participate Discussions</Link>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Check Academic Calendar</h5>
              <p className="card-text">View important dates and events for the semester.</p>
              <Link to="check-academic-calendar" className="btn btn-primary">Go to Academic Calendar</Link>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Request Transcripts</h5>
              <p className="card-text">Request your official transcripts from here.</p>
              <Link to="request-transcripts" className="btn btn-primary">Go to Request Transcripts</Link>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Access Financial Info</h5>
              <p className="card-text">View your financial aid and tuition details.</p>
              <Link to="access-financial-info" className="btn btn-primary">Go to Access Financial Info</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
