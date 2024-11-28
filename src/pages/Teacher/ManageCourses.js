// src/pages/Teacher/ManageCourses.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ManageCourses = () => {
  return (
    <div className="container mt-5">
      <h3>Manage Courses</h3>
      <div className="row">
        <div className="col-md-6 mb-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Add New Course</h5>
              <p className="card-text">Set up new courses with descriptions, schedules, and learning outcomes.</p>
              <button className="btn btn-primary">Add Course</button>
            </div>
          </div>
        </div>

        <div className="col-md-6 mb-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Edit Existing Course</h5>
              <p className="card-text">Edit details of existing courses such as course content and schedules.</p>
              <button className="btn btn-primary">Edit Course</button>
            </div>
          </div>
        </div>

        <div className="col-md-6 mb-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">View Course List</h5>
              <p className="card-text">View all the courses you have set up and manage them.</p>
              <button className="btn btn-primary">View Courses</button>
            </div>
          </div>
        </div>

        <div className="col-md-6 mb-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Delete Course</h5>
              <p className="card-text">Remove a course that is no longer needed from the catalog.</p>
              <button className="btn btn-danger">Delete Course</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageCourses;
