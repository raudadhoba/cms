

// src/pages/Librarian/LibrarianDashboard.js
import React from 'react';
import { Link, Routes, Route, Outlet } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


const LibrarianDashboard = () => {
  return (
    <div className="container mt-5">
      <h2 className="mb-4">Librarian Dashboard</h2>
      <div className="row">
        {/* Grid items for each librarian functionality */}
        <div className="col-md-4 mb-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Manage Library Resources</h5>
              <p className="card-text">Add, update, and remove books and materials.</p>
              <Link to="manage-resources" className="btn btn-primary">Go to Manage Resources</Link>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Track Borrowing</h5>
              <p className="card-text">Monitor currently checked out books.</p>
              <Link to="track-borrowings" className="btn btn-primary">Go to Track Borrowing</Link>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Process Returns</h5>
              <p className="card-text">Handle returns and overdue items.</p>
              <Link to="process-returns" className="btn btn-primary">Go to Process Returns</Link>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Manage Reservations</h5>
              <p className="card-text">Allow users to reserve books.</p>
              <Link to="manage-reservations" className="btn btn-primary">Go to Manage Reservations</Link>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Assist Users</h5>
              <p className="card-text">Help students and faculty find materials.</p>
              <Link to="assist-users" className="btn btn-primary">Go to Assist Users</Link>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Generate Reports</h5>
              <p className="card-text">Create usage reports and trends.</p>
              <Link to="generate-reports" className="btn btn-primary">Go to Generate Reports</Link>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Organize Events</h5>
              <p className="card-text">Plan library events like book clubs.</p>
              <Link to="organize-events" className="btn btn-primary">Go to Organize Events</Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Add Outlet here for rendering nested routes */}
      <Outlet />
    </div>
  );
};

export default LibrarianDashboard;
