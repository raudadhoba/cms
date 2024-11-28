// src/pages/Teacher/TrackAttendance.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const TrackAttendance = () => {
  return (
    <div className="container mt-5">
      <h3>Track Attendance</h3>
      <div className="card shadow-sm mb-4">
        <div className="card-body">
          <h5 className="card-title">Mark Attendance</h5>
          <form>
            <div className="mb-3">
              <label htmlFor="classDate" className="form-label">Class Date</label>
              <input type="date" className="form-control" id="classDate" />
            </div>

            <div className="mb-3">
              <label htmlFor="selectClass" className="form-label">Select Class</label>
              <select className="form-select" id="selectClass">
                <option value="class1">Class 1</option>
                <option value="class2">Class 2</option>
                <option value="class3">Class 3</option>
              </select>
            </div>

            <div className="mb-3">
              <label className="form-label">Students</label>
              <ul className="list-group">
                <li className="list-group-item">
                  John Doe
                  <div className="form-check form-check-inline float-end">
                    <input className="form-check-input" type="radio" name="attendance1" id="present1" value="present" />
                    <label className="form-check-label" htmlFor="present1">Present</label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="attendance1" id="absent1" value="absent" />
                    <label className="form-check-label" htmlFor="absent1">Absent</label>
                  </div>
                </li>
                <li className="list-group-item">
                  Jane Smith
                  <div className="form-check form-check-inline float-end">
                    <input className="form-check-input" type="radio" name="attendance2" id="present2" value="present" />
                    <label className="form-check-label" htmlFor="present2">Present</label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="attendance2" id="absent2" value="absent" />
                    <label className="form-check-label" htmlFor="absent2">Absent</label>
                  </div>
                </li>
                {/* Add more students as needed */}
              </ul>
            </div>

            <button type="submit" className="btn btn-primary">Submit Attendance</button>
          </form>
        </div>
      </div>

      <div className="card shadow-sm">
        <div className="card-body">
          <h5 className="card-title">Generate Attendance Report</h5>
          <p className="card-text">Select a date range to generate an attendance report.</p>
          <div className="mb-3">
            <label htmlFor="startDate" className="form-label">Start Date</label>
            <input type="date" className="form-control" id="startDate" />
          </div>
          <div className="mb-3">
            <label htmlFor="endDate" className="form-label">End Date</label>
            <input type="date" className="form-control" id="endDate" />
          </div>
          <button className="btn btn-secondary">Generate Report</button>
        </div>
      </div>
    </div>
  );
};

export default TrackAttendance;
