// src/pages/Student/AccessFinancialInfo.js

import React from 'react';
import { Table } from 'react-bootstrap';

const AccessFinancialInfo = () => {
  const tuitionFees = {
    semester: 'Fall 2024',
    amount: 15000,
  };

  const paymentHistory = [
    { id: 1, date: '2024-08-15', amount: 7500, status: 'Completed' },
    { id: 2, date: '2024-09-15', amount: 7500, status: 'Completed' },
  ];

  const financialAid = {
    aidType: 'Federal Grant',
    amount: 5000,
    status: 'Approved',
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Access Financial Information</h2>
      <p>View your tuition fees, payment history, and financial aid status.</p>

      <div style={styles.tuitionFees}>
        <h4>Tuition Fees for {tuitionFees.semester}</h4>
        <p style={styles.tuitionAmount}>${tuitionFees.amount}</p>
      </div>

      <h4>Payment History</h4>
      <Table striped bordered hover style={styles.table}>
        <thead>
          <tr>
            <th>Date</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {paymentHistory.map((payment) => (
            <tr key={payment.id}>
              <td>{payment.date}</td>
              <td>${payment.amount}</td>
              <td>{payment.status}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      <div style={styles.financialAid}>
        <h4>Financial Aid Status</h4>
        <p><strong>Type:</strong> {financialAid.aidType}</p>
        <p><strong>Amount:</strong> ${financialAid.amount}</p>
        <p><strong>Status:</strong> {financialAid.status}</p>
      </div>
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
  tuitionFees: {
    border: '1px solid #007bff',
    padding: '15px',
    borderRadius: '5px',
    backgroundColor: '#f8f9fa',
  },
  tuitionAmount: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#28a745',
  },
  table: {
    marginTop: '20px',
  },
  financialAid: {
    border: '1px solid #007bff',
    padding: '15px',
    borderRadius: '5px',
    backgroundColor: '#f8f9fa',
    marginTop: '20px',
  },
};

export default AccessFinancialInfo;
