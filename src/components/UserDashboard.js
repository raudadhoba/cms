    // src/pages/Admin/AdminDashboard.js
import React from 'react';
import styled from 'styled-components';

const DashboardContainer = styled.div`
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
`;

const DashboardCard = styled.div`
  background-color: #ECF0F1;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
`;

const AdminDashboard = () => {
  return (
    <DashboardContainer>
      <DashboardCard>
        <h3>Manage Users</h3>
        <p>Admin can manage all users from here.</p>
      </DashboardCard>
      <DashboardCard>
        <h3>View Reports</h3>
        <p>Generate reports for all activities.</p>
      </DashboardCard>
      <DashboardCard>
        <h3>System Settings</h3>
        <p>Update system-wide settings.</p>
      </DashboardCard>
    </DashboardContainer>
  );
};

export default AdminDashboard;
