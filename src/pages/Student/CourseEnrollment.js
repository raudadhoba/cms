import React, { useState } from 'react';
import { Card, Button, Form, Row, Col } from 'react-bootstrap';

const CourseEnrollment = () => {
  // Example course data
  const courses = [
    {
      id: 1,
      title: 'Introduction to Programming',
      instructor: 'Dr. John Smith',
      description: 'Learn the basics of programming using Python. Ideal for beginners.',
      status: 'Available',
    },
    {
      id: 2,
      title: 'Data Structures',
      instructor: 'Prof. Jane Doe',
      description: 'Deep dive into various data structures and their implementations.',
      status: 'Available',
    },
    {
      id: 3,
      title: 'Database Management',
      instructor: 'Dr. Emily White',
      description: 'Understand database design, SQL, and NoSQL databases.',
      status: 'Full',
    },
    // Add more courses as needed
  ];

  // State for filtering (you can use it later for implementing filtering logic)
  const [department, setDepartment] = useState('');
  const [semester, setSemester] = useState('');

  return (
    <div className="container">
      <h2 className="mb-4">Course Enrollment</h2>
      <p>Select and enroll in courses for the current semester. Filter by department or semester to find courses more easily.</p>

      {/* Filter Options */}
      <Form className="mb-4">
        <Row>
          <Col md={4}>
            <Form.Group controlId="departmentSelect">
              <Form.Label>Filter by Department</Form.Label>
              <Form.Select value={department} onChange={(e) => setDepartment(e.target.value)}>
                <option value="">All Departments</option>
                <option value="CS">Computer Science</option>
                <option value="Math">Mathematics</option>
                <option value="Bio">Biology</option>
                {/* Add more departments */}
              </Form.Select>
            </Form.Group>
          </Col>
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
        </Row>
      </Form>

      {/* Course Cards */}
      <Row>
        {courses.map((course) => (
          <Col md={4} className="mb-4" key={course.id}>
            <Card className="h-100">
              <Card.Body>
                <Card.Title>{course.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{course.instructor}</Card.Subtitle>
                <Card.Text>{course.description}</Card.Text>
                <Button 
                  variant={course.status === 'Available' ? 'primary' : 'secondary'} 
                  disabled={course.status !== 'Available'}
                >
                  {course.status === 'Available' ? 'Enroll Now' : 'Full'}
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Pagination (optional) */}
      <div className="d-flex justify-content-center mt-4">
        <Button variant="outline-primary" className="mx-1">&laquo; Previous</Button>
        <Button variant="outline-primary" className="mx-1">Next &raquo;</Button>
      </div>
    </div>
  );
};

export default CourseEnrollment;
