// src/pages/Student/AccessCourseMaterials.js

import React, { useState } from 'react';
import { Card, Button, Form, Row, Col } from 'react-bootstrap';

const AccessCourseMaterials = () => {
  // Example materials data
  const materials = [
    {
      id: 1,
      course: 'Introduction to Programming',
      name: 'Lecture 1: Introduction to JavaScript',
      type: 'Lecture Notes',
      uploadDate: '2024-09-15',
      link: '#',
    },
    {
      id: 2,
      course: 'Data Structures',
      name: 'Assignment 1: Array and Linked Lists',
      type: 'Assignment',
      uploadDate: '2024-09-20',
      link: '#',
    },
    {
      id: 3,
      course: 'Database Management',
      name: 'Lecture 2: SQL Basics',
      type: 'Lecture Notes',
      uploadDate: '2024-09-22',
      link: '#',
    },
    {
      id: 4,
      course: 'Database Management',
      name: 'Project Guide: Database Design',
      type: 'Project Guide',
      uploadDate: '2024-09-25',
      link: '#',
    },
    // Add more materials as needed
  ];

  const [course, setCourse] = useState('');

  return (
    <div className="container">
      <h2 className="mb-4">Access Course Materials</h2>
      <p>Download or view lecture notes, assignments, and other resources posted by your instructors.</p>

      {/* Filter Options */}
      <Form className="mb-4">
        <Row>
          <Col md={4}>
            <Form.Group controlId="courseSelect">
              <Form.Label>Filter by Course</Form.Label>
              <Form.Select value={course} onChange={(e) => setCourse(e.target.value)}>
                <option value="">All Courses</option>
                <option value="Introduction to Programming">Introduction to Programming</option>
                <option value="Data Structures">Data Structures</option>
                <option value="Database Management">Database Management</option>
                {/* Add more courses */}
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>
      </Form>

      {/* Materials List */}
      <Row>
        {materials
          .filter((material) => (course ? material.course === course : true))
          .map((material) => (
            <Col md={6} lg={4} className="mb-4" key={material.id}>
              <Card>
                <Card.Body>
                  <Card.Title>{material.name}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">{material.type}</Card.Subtitle>
                  <Card.Text>
                    <strong>Course:</strong> {material.course}
                    <br />
                    <strong>Upload Date:</strong> {material.uploadDate}
                  </Card.Text>
                  <Button variant="primary" href={material.link} target="_blank">
                    Download/View
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
      </Row>
    </div>
  );
};

export default AccessCourseMaterials;
