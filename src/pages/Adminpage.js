import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminPage = () => {
  const [admins, setAdmins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [newAdmin, setNewAdmin] = useState({
    adminName: '',
    email: '',
    phoneNo: '',
  });

  // Fetch admins from backend when the component mounts
  useEffect(() => {
    const fetchAdmins = async () => {
      try {
        const response = await axios.get('http://localhost:8080/admins'); // Replace with your backend URL
        setAdmins(response.data);  // Save the response data in state
        setLoading(false);  // Set loading to false after data is fetched
      } catch (error) {
        setError('Error fetching data');
        setLoading(false);  // Set loading to false if there's an error
      }
    };

    fetchAdmins();
  }, []);  // Empty dependency array ensures this runs only once when the component mounts

  // Handle input changes for new admin form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewAdmin((prevAdmin) => ({
      ...prevAdmin,
      [name]: value,
    }));
  };

  // Handle submit of new admin form
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send POST request to add the new admin to the backend
      const response = await axios.post('http://localhost:8080/admins', newAdmin);

      // Add the new admin to the state (to update the UI without re-fetching the list)
      setAdmins((prevAdmins) => [...prevAdmins, response.data]);

      // Reset the form
      setNewAdmin({
        adminName: '',
        email: '',
        phoneNo: '',
      });
    } catch (error) {
      setError('Error adding admin');
    }
  };

  // Loading, error, and data handling
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="container">
      <h1>Admin Management</h1>
      
      {/* Add New Admin Form */}
      <h2>Add New Admin</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="adminName">Admin Name</label>
          <input
            type="text"
            id="adminName"
            name="adminName"
            className="form-control"
            value={newAdmin.adminName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
            value={newAdmin.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNo">Phone Number</label>
          <input
            type="text"
            id="phoneNo"
            name="phoneNo"
            className="form-control"
            value={newAdmin.phoneNo}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit" className="btn btn-primary mt-3">Add Admin</button>
      </form>

      {/* Admin List Table */}
      <h2>Admin List</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Admin Name</th>
            <th>Email</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {admins.map((admin) => (
            <tr key={admin.adminId}>
              <td>{admin.adminName}</td>
              <td>{admin.email}</td>
              <td>{admin.phoneNo || 'N/A'}</td> {/* Display 'N/A' if phone number is null */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminPage;
