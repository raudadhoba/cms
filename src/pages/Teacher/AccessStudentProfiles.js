// src/pages/Teacher/AccessStudentProfiles.js
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const AccessStudentProfiles = () => {
  const [students, setStudents] = useState([
    { id: 1, name: 'John Doe', progress: '80%', attendance: '95%' },
    { id: 2, name: 'Jane Smith', progress: '75%', attendance: '90%' },
    { id: 3, name: 'Emily Johnson', progress: '90%', attendance: '98%' },
  ]);
  const [selectedStudent, setSelectedStudent] = useState(null);

  const handleStudentClick = (student) => {
    setSelectedStudent(student);
  };

  return (
    <div className="container mt-5">
      <h3>Access Student Profiles</h3>

      <div className="row">
        {students.map((student) => (
          <div key={student.id} className="col-md-4 mb-4">
            <div className="card shadow-sm" onClick={() => handleStudentClick(student)}>
              <div className="card-body">
                <h5 className="card-title">{student.name}</h5>
                <p className="card-text">Progress: {student.progress}</p>
                <p className="card-text">Attendance: {student.attendance}</p>
                <button className="btn btn-primary">View Profile</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedStudent && (
        <div className="card mt-4">
          <div className="card-body">
            <h5 className="card-title">{selectedStudent.name}'s Profile</h5>
            <p><strong>Progress:</strong> {selectedStudent.progress}</p>
            <p><strong>Attendance:</strong> {selectedStudent.attendance}</p>
            {/* Add more student details here as needed */}
          </div>
        </div>
      )}
    </div>
  );
};

export default AccessStudentProfiles;
