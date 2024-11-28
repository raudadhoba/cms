// src/pages/Student/CheckAcademicCalendar.js

import React, { useState } from 'react';
import { Card, Button, ListGroup, Modal } from 'react-bootstrap';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const CheckAcademicCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showModal, setShowModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const events = [
    { id: 1, date: new Date(2024, 9, 15), title: 'Midterm Exams', description: 'Midterm exams for all departments.' },
    { id: 2, date: new Date(2024, 9, 25), title: 'Holiday - Diwali', description: 'College closed for Diwali festival.' },
    { id: 3, date: new Date(2024, 10, 5), title: 'Registration Deadline', description: 'Last day to register for spring semester.' },
    { id: 4, date: new Date(2024, 10, 15), title: 'End of Semester Exams', description: 'Final exams for the semester.' },
  ];

  const handleDateChange = (date) => {
    setSelectedDate(date);
    const eventOnDate = events.find((event) => event.date.toDateString() === date.toDateString());
    if (eventOnDate) {
      setSelectedEvent(eventOnDate);
      setShowModal(true);
    }
  };

  const handleCloseModal = () => setShowModal(false);

  return (
    <div style={styles.container}>
      <h2 style={styles.heading} className="mb-4">Check Academic Calendar</h2>
      <p>View important dates such as exams, holidays, and registration deadlines.</p>
      
      <div style={styles.calendarContainer}>
        <Calendar
          onChange={handleDateChange}
          value={selectedDate}
          tileContent={({ date }) => {
            const eventOnDate = events.find(
              (event) => event.date.toDateString() === date.toDateString()
            );
            return eventOnDate ? (
              <span style={styles.eventIndicator}></span>
            ) : null;
          }}
        />
      </div>

      <h4 className="mt-4">Upcoming Events</h4>
      <ListGroup>
        {events.map((event) => (
          <ListGroup.Item key={event.id}>
            <div className="d-flex justify-content-between">
              <span>
                <strong>{event.title}</strong> - {event.date.toDateString()}
              </span>
              <Button variant="link" onClick={() => {
                setSelectedEvent(event);
                setShowModal(true);
              }}>
                View Details
              </Button>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>

      {/* Modal for Event Details */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedEvent?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{selectedEvent?.description}</p>
          <p><strong>Date:</strong> {selectedEvent?.date.toDateString()}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

// Inline styles
const styles = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
  },
  heading: {
    color: '#007bff',
  },
  calendarContainer: {
    maxWidth: '500px',
    margin: '0 auto',
  },
  eventIndicator: {
    display: 'block',
    width: '6px',
    height: '6px',
    backgroundColor: '#007bff',
    borderRadius: '50%',
    margin: '2px auto',
  },
};

export default CheckAcademicCalendar;
