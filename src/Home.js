import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from 'react-router-dom'; 

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Home = () => {
  const navigate = useNavigate(); // Initialize navigate hook

  // Sample data for the chart
  const data = {
    labels: ["January", "February", "March", "April", "May"],
    datasets: [
      {
        label: "User Registrations",
        data: [65, 59, 80, 81, 56],
        backgroundColor: "#42A5F5",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
      },
    },
  };

  const handleGoToPage = () => {
    // Navigate to another page (replace with your target route)
    navigate("/adminpage");
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Welcome.....</h2>

      <div className="row mb-4">
        {/* Grid View */}
        <div className="col-md-4 mb-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Total Users</h5>
              <p className="card-text fs-4">1,230</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">New Registrations</h5>
              <p className="card-text fs-4">150</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Active Users</h5>
              <p className="card-text fs-4">900</p>
            </div>
          </div>
        </div>
      </div>

      {/* List View */}
      <div className="row mb-4">
        <div className="col-md-6">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Recent Activities</h5>
              <ul className="list-group">
                <li className="list-group-item">John Doe logged in</li>
                <li className="list-group-item">New course added: React Basics</li>
                <li className="list-group-item">Admin updated system settings</li>
                <li className="list-group-item">User Jane registered</li>
                <li className="list-group-item">Database backup completed</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Chart View */}
        <div className="col-md-6">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Monthly Registrations</h5>
              <Bar data={data} options={options} />
            </div>
          </div>
        </div>
      </div>

      {/* Button to navigate to another page */}
      <button 
        className="btn btn-primary mt-4"
        onClick={handleGoToPage} // Click handler for navigation
      >
        Go to Another Page
      </button>
    </div>
  );
};

export default Home;
