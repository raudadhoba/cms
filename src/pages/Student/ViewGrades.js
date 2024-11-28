// src/pages/Student/ViewGrades.js

import React, { useState } from 'react';
import { Table, Form, Row, Col } from 'react-bootstrap';

const ViewGrades = () => {
  // Example grades data
  const grades = [
    {
      id: 1,
      course: 'Introduction to Programming',
      assignment: 'Midterm Exam',
      grade: 'A',
      feedback: 'Excellent performance!',
      status: 'Passed',
    },
    {
      id: 2,
      course: 'Data Structures',
      assignment: 'Project 1',
      grade: 'B+',
      feedback: 'Good effort, improve time complexity.',
      status: 'Passed',
    },
    {
      id: 3,
      course: 'Database Management',
      assignment: 'Final Exam',
      grade: 'C',
      feedback: 'Needs better understanding of normalization.',
      status: 'Needs Improvement',
    },
    // Add more grades as needed
  ];

  const [semester, setSemester] = useState('');
  const [course, setCourse] = useState('');

  return (
    <div className="container">
      <h2 className="mb-4">View Grades</h2>
      <p>Check your grades for courses and assignments for the current and past semesters.</p>

      {/* Filter Options */}
      <Form className="mb-4">
        <Row>
          <Col md={4}>
            <Form.Group controlId="semesterSelect">
              <Form.Label>Filter by Semester</Form.Label>
              <Form.Select value={semester} onChange={(e) => setSemester(e.target.value)}>
                <option value="">All Semesters</option>
                <option value="Fall">Fall 2024</option>
                <option value="Spring">Spring 2024</option>
                {/* Add more semesters */}
              </Form.Select>
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group controlId="courseSelect">
              <Form.Label>Filter by Course</Form.Label>
              <Form.Select value={course} onChange={(e) => setCourse(e.target.value)}>
                <option value="">All Courses</option>
                <option value="Intro to Programming">Introduction to Programming</option>
                <option value="Data Structures">Data Structures</option>
                <option value="Database Management">Database Management</option>
                {/* Add more courses */}
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>
      </Form>

      {/* Grades Table */}
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Course</th>
            <th>Assignment/Exam</th>
            <th>Grade</th>
            <th>Feedback</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {grades.map((grade) => (
            <tr key={grade.id}>
              <td>{grade.course}</td>
              <td>{grade.assignment}</td>
              <td>{grade.grade}</td>
              <td>{grade.feedback}</td>
              <td>
                <span className={grade.status === 'Passed' ? 'text-success' : 'text-warning'}>
                  {grade.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ViewGrades;
