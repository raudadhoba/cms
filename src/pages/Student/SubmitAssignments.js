// src/pages/Student/SubmitAssignments.js

import React, { useState } from 'react';
import { Form, Button, Table, Row, Col } from 'react-bootstrap';

const SubmitAssignments = () => {
  // Example submitted assignments data
  const [submittedAssignments, setSubmittedAssignments] = useState([
    {
      id: 1,
      course: 'Data Structures',
      name: 'Assignment 1: Array and Linked Lists',
      submissionDate: '2024-10-05',
      status: 'Graded',
    },
    {
      id: 2,
      course: 'Database Management',
      name: 'Project Report',
      submissionDate: '2024-10-10',
      status: 'Submitted',
    },
  ]);

  const [course, setCourse] = useState('');
  const [assignmentName, setAssignmentName] = useState('');
  const [file, setFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (course && assignmentName && file) {
      const newAssignment = {
        id: submittedAssignments.length + 1,
        course,
        name: assignmentName,
        submissionDate: new Date().toISOString().split('T')[0],
        status: 'Submitted',
      };
      setSubmittedAssignments([...submittedAssignments, newAssignment]);
      setCourse('');
      setAssignmentName('');
      setFile(null);
      alert('Assignment submitted successfully!');
    } else {
      alert('Please fill in all fields and upload a file.');
    }
  };

  return (
    <div className="container">
      <h2 className="mb-4">Submit Assignments</h2>
      <p>Upload your assignments for evaluation. Ensure that you select the correct course and provide a suitable file.</p>

      {/* Upload Form */}
      <Form className="mb-4" onSubmit={handleSubmit}>
        <Row>
          <Col md={4}>
            <Form.Group controlId="courseSelect" className="mb-3">
              <Form.Label>Select Course</Form.Label>
              <Form.Select
                value={course}
                onChange={(e) => setCourse(e.target.value)}
              >
                <option value="">Choose a course</option>
                <option value="Data Structures">Data Structures</option>
                <option value="Database Management">Database Management</option>
                <option value="Introduction to Programming">Introduction to Programming</option>
                {/* Add more courses as needed */}
              </Form.Select>
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group controlId="assignmentName" className="mb-3">
              <Form.Label>Assignment Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter assignment name"
                value={assignmentName}
                onChange={(e) => setAssignmentName(e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group controlId="fileUpload" className="mb-3">
              <Form.Label>Upload File</Form.Label>
              <Form.Control
                type="file"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </Form.Group>
          </Col>
        </Row>
        <Button variant="primary" type="submit">
          Submit Assignment
        </Button>
      </Form>

      {/* Submitted Assignments Table */}
      <h4>Submitted Assignments</h4>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Course</th>
            <th>Assignment Name</th>
            <th>Submission Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {submittedAssignments.map((assignment) => (
            <tr key={assignment.id}>
              <td>{assignment.course}</td>
              <td>{assignment.name}</td>
              <td>{assignment.submissionDate}</td>
              <td>
                <span className={
                  assignment.status === 'Graded' ? 'text-success' :
                  'text-primary'
                }>
                  {assignment.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default SubmitAssignments;
