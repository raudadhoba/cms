// src/pages/Admin/ManageCourses.js
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ManageCourses = () => {
  const [courses, setCourses] = useState([
    { id: 1, title: 'Introduction to Programming', description: 'Learn the basics of programming.' },
    { id: 2, title: 'Data Structures', description: 'Understanding data organization and manipulation.' },
    { id: 3, title: 'Web Development', description: 'Create websites and web applications.' },
  ]);

  const [newCourse, setNewCourse] = useState({ title: '', description: '' });
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewCourse({ ...newCourse, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      setCourses(courses.map(course => (course.id === selectedCourse.id ? { ...course, ...newCourse } : course)));
    } else {
      setCourses([...courses, { id: courses.length + 1, ...newCourse }]);
    }
    setNewCourse({ title: '', description: '' });
    setIsEditing(false);
    setSelectedCourse(null);
  };

  const handleEdit = (course) => {
    setNewCourse({ title: course.title, description: course.description });
    setSelectedCourse(course);
    setIsEditing(true);
  };

  const handleDelete = (id) => {
    setCourses(courses.filter(course => course.id !== id));
  };

  return (
    <div className="container mt-5">
      <h3>Manage Courses</h3>

      <form onSubmit={handleSubmit} className="mb-4">
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Course Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            value={newCourse.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Course Description</label>
          <textarea
            className="form-control"
            id="description"
            name="description"
            value={newCourse.description}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          {isEditing ? 'Update Course' : 'Add Course'}
        </button>
      </form>

      <div className="card shadow-sm">
        <div className="card-body">
          <h5 className="card-title">Course List</h5>
          <table className="table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {courses.map(course => (
                <tr key={course.id}>
                  <td>{course.title}</td>
                  <td>{course.description}</td>
                  <td>
                    <button className="btn btn-warning me-2" onClick={() => handleEdit(course)}>Edit</button>
                    <button className="btn btn-danger" onClick={() => handleDelete(course.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageCourses;
