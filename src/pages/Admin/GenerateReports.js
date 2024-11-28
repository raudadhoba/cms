// src/pages/Admin/GenerateReports.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const GenerateReports = () => {
  const reports = [
    { id: 1, title: 'Student Enrollment', description: 'Overview of student enrollment statistics.' },
    { id: 2, title: 'Course Completion Rates', description: 'Report on course completion rates across programs.' },
    { id: 3, title: 'Attendance Summary', description: 'Summary of attendance for all classes.' },
    { id: 4, title: 'Library Usage', description: 'Report on library usage and borrowing trends.' },
  ];

  const handleGenerate = (report) => {
    alert(`Generating report for: ${report.title}`);
    // Here you can implement the logic to generate the selected report.
  };

  return (
    <div className="container mt-5">
      <h3>Generate Reports</h3>
      <div className="row">
        {reports.map(report => (
          <div className="col-md-4 mb-4" key={report.id}>
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{report.title}</h5>
                <p className="card-text">{report.description}</p>
                <button className="btn btn-primary" onClick={() => handleGenerate(report)}>Generate Report</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GenerateReports;
