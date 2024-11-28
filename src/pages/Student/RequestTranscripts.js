// src/pages/Student/RequestTranscripts.js

import React, { useState } from 'react';
import { Form, Button, Table, Modal } from 'react-bootstrap';

const RequestTranscripts = () => {
  const [showModal, setShowModal] = useState(false);
  const [transcriptDetails, setTranscriptDetails] = useState({
    numberOfCopies: 1,
    deliveryMethod: 'Email',
    notes: '',
  });

  const [requests, setRequests] = useState([
    { id: 1, date: '2024-09-01', copies: 2, method: 'Email', status: 'Completed' },
    { id: 2, date: '2024-10-05', copies: 1, method: 'Postal Mail', status: 'Processing' },
  ]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTranscriptDetails({ ...transcriptDetails, [name]: value });
  };

  const handleSubmit = () => {
    setRequests([
      ...requests,
      {
        id: requests.length + 1,
        date: new Date().toISOString().split('T')[0],
        copies: transcriptDetails.numberOfCopies,
        method: transcriptDetails.deliveryMethod,
        status: 'Processing',
      },
    ]);
    setShowModal(false);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Request Transcripts</h2>
      <p>Apply for official academic transcripts for your future educational or employment opportunities.</p>
      
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Number of Copies</Form.Label>
          <Form.Control
            type="number"
            name="numberOfCopies"
            value={transcriptDetails.numberOfCopies}
            min="1"
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Delivery Method</Form.Label>
          <Form.Select
            name="deliveryMethod"
            value={transcriptDetails.deliveryMethod}
            onChange={handleInputChange}
          >
            <option value="Email">Email</option>
            <option value="Postal Mail">Postal Mail</option>
            <option value="Pick-up at Office">Pick-up at Office</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Additional Notes</Form.Label>
          <Form.Control
            as="textarea"
            name="notes"
            rows={3}
            value={transcriptDetails.notes}
            onChange={handleInputChange}
            placeholder="Any specific instructions or details..."
          />
        </Form.Group>

        <Button variant="primary" onClick={() => setShowModal(true)}>
          Submit Request
        </Button>
      </Form>

      <h4 style={styles.previousRequestsHeading}>Previous Transcript Requests</h4>
      <Table striped bordered hover style={styles.table}>
        <thead>
          <tr>
            <th>Date</th>
            <th>Copies</th>
            <th>Delivery Method</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {requests.map((request) => (
            <tr key={request.id}>
              <td>{request.date}</td>
              <td>{request.copies}</td>
              <td>{request.method}</td>
              <td>{request.status}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Confirmation Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Transcript Request</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p><strong>Number of Copies:</strong> {transcriptDetails.numberOfCopies}</p>
          <p><strong>Delivery Method:</strong> {transcriptDetails.deliveryMethod}</p>
          <p><strong>Additional Notes:</strong> {transcriptDetails.notes || 'None'}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Confirm Request
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
  previousRequestsHeading: {
    color: '#007bff',
    marginTop: '2rem',
  },
  table: {
    marginTop: '20px',
  },
};

export default RequestTranscripts;
