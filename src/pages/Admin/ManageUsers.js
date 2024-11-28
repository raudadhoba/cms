// src/pages/Admin/ManageUsers.js
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ManageUsers = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'John Doe', role: 'Teacher' },
    { id: 2, name: 'Jane Smith', role: 'Student' },
    { id: 3, name: 'Emily Johnson', role: 'Librarian' },
  ]);
  
  const [newUser, setNewUser] = useState({ name: '', role: '' });
  const [selectedUser, setSelectedUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      setUsers(users.map(user => (user.id === selectedUser.id ? { ...user, ...newUser } : user)));
    } else {
      setUsers([...users, { id: users.length + 1, ...newUser }]);
    }
    setNewUser({ name: '', role: '' });
    setIsEditing(false);
    setSelectedUser(null);
  };

  const handleEdit = (user) => {
    setNewUser({ name: user.name, role: user.role });
    setSelectedUser(user);
    setIsEditing(true);
  };

  const handleDelete = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  return (
    <div className="container mt-5">
      <h3>Manage Users</h3>

      <form onSubmit={handleSubmit} className="mb-4">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={newUser.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="role" className="form-label">Role</label>
          <input
            type="text"
            className="form-control"
            id="role"
            name="role"
            value={newUser.role}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          {isEditing ? 'Update User' : 'Add User'}
        </button>
      </form>

      <div className="card shadow-sm">
        <div className="card-body">
          <h5 className="card-title">User List</h5>
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Role</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.role}</td>
                  <td>
                    <button className="btn btn-warning me-2" onClick={() => handleEdit(user)}>Edit</button>
                    <button className="btn btn-danger" onClick={() => handleDelete(user.id)}>Delete</button>
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

export default ManageUsers;
