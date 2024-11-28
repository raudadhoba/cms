// src/pages/Admin/Setting.js
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Setting = () => {
  const [settings, setSettings] = useState({
    appTitle: 'College Management System',
    contactEmail: 'admin@college.edu',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSettings({ ...settings, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle settings submission (e.g., send to an API)
    alert('Settings saved successfully!');
  };

  return (
    <div className="container mt-5">
      <h3>Settings</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Application Title</label>
          <input
            type="text"
            className="form-control"
            name="appTitle"
            value={settings.appTitle}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Contact Email</label>
          <input
            type="email"
            className="form-control"
            name="contactEmail"
            value={settings.contactEmail}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">Save Changes</button>
      </form>
    </div>
  );
};

export default Setting;
