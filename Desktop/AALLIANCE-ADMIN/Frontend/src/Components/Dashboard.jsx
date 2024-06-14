import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h1>Admin Dashboard</h1>
      <nav>
        <ul>
          <li>
            <Link to="/manage-products">Manage Products</Link>
          </li>
          <li>
            <Link to="/bulk-upload">Bulk Upload</Link>
          </li>
          <li>
            <Link to="/manage-pincodes">Manage Pincodes</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Dashboard;