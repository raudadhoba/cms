// src/pages/Admin/ManageEvents.js
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ManageEvents = () => {
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState({ name: '', date: '', description: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEvent({ ...newEvent, [name]: value });
  };

  const handleAddEvent = () => {
    if (newEvent.name && newEvent.date && newEvent.description) {
      setEvents([...events, { ...newEvent, id: events.length + 1 }]);
      setNewEvent({ name: '', date: '', description: '' }); // Reset form
    } else {
      alert('Please fill in all fields');
    }
  };

  const handleDelete = (id) => {
    setEvents(events.filter(event => event.id !== id));
  };

  return (
    <div className="container mt-5">
      <h3>Manage Events</h3>
      <div className="mb-3">
        <h5>Add New Event</h5>
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Event Name"
          name="name"
          value={newEvent.name}
          onChange={handleInputChange}
        />
        <input
          type="date"
          className="form-control mb-2"
          name="date"
          value={newEvent.date}
          onChange={handleInputChange}
        />
        <textarea
          className="form-control mb-2"
          placeholder="Event Description"
          name="description"
          value={newEvent.description}
          onChange={handleInputChange}
        />
        <button className="btn btn-primary" onClick={handleAddEvent}>Add Event</button>
      </div>
      <table className="table mt-4">
        <thead>
          <tr>
            <th>Event Name</th>
            <th>Date</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {events.map(event => (
            <tr key={event.id}>
              <td>{event.name}</td>
              <td>{event.date}</td>
              <td>{event.description}</td>
              <td>
                <button className="btn btn-danger" onClick={() => handleDelete(event.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageEvents;
