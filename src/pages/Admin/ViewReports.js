// src/pages/Admin/ViewReports.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ViewReports = () => {
  const reports = [
    { id: 1, title: 'Student Enrollment Report', description: 'Overview of student enrollment by program.' },
    { id: 2, title: 'Course Completion Report', description: 'Statistics on course completion rates.' },
    { id: 3, title: 'Attendance Report', description: 'Detailed attendance records for all classes.' },
    { id: 4, title: 'Library Usage Report', description: 'Reports on the usage of library resources.' },
  ];

  return (
    <div className="container mt-5">
      <h3>View Reports</h3>
      <div className="row">
        {reports.map(report => (
          <div className="col-md-4 mb-4" key={report.id}>
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{report.title}</h5>
                <p className="card-text">{report.description}</p>
                <a href={`#`} className="btn btn-primary">View Report</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewReports;
