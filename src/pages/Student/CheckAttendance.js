// src/pages/Student/CheckAttendance.js

import React, { useState } from 'react';
import { Table, Form, Row, Col } from 'react-bootstrap';

const CheckAttendance = () => {
  // Example attendance data
  const attendanceRecords = [
    {
      id: 1,
      course: 'Introduction to Programming',
      date: '2024-10-01',
      status: 'Present',
      remarks: '',
    },
    {
      id: 2,
      course: 'Data Structures',
      date: '2024-10-02',
      status: 'Absent',
      remarks: 'Medical leave',
    },
    {
      id: 3,
      course: 'Database Management',
      date: '2024-10-03',
      status: 'Late',
      remarks: 'Late by 10 minutes',
    },
    // Add more records as needed
  ];

  const [course, setCourse] = useState('');
  const [date, setDate] = useState('');

  return (
    <div className="container">
      <h2 className="mb-4">Check Attendance</h2>
      <p>Review your attendance records for each of your courses. You can filter by course or date range to find specific records.</p>

      {/* Filter Options */}
      <Form className="mb-4">
        <Row>
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
          <Col md={4}>
            <Form.Group controlId="dateSelect">
              <Form.Label>Filter by Date</Form.Label>
              <Form.Control
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </Form.Group>
          </Col>
        </Row>
      </Form>

      {/* Attendance Table */}
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Course</th>
            <th>Date</th>
            <th>Status</th>
            <th>Remarks</th>
          </tr>
        </thead>
        <tbody>
          {attendanceRecords
            .filter((record) => (course ? record.course === course : true))
            .filter((record) => (date ? record.date === date : true))
            .map((record) => (
              <tr key={record.id}>
                <td>{record.course}</td>
                <td>{record.date}</td>
                <td>
                  <span className={
                    record.status === 'Present' ? 'text-success' :
                    record.status === 'Absent' ? 'text-danger' :
                    'text-warning'
                  }>
                    {record.status}
                  </span>
                </td>
                <td>{record.remarks || 'N/A'}</td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
};

export default CheckAttendance;
