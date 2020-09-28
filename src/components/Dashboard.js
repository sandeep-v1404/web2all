import React from "react";
import "./Dashboard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
function Dashboard() {
  return (
    <div className="dashboard">
      <h4>Dashboard</h4>
      <p>Welcome to DashBoard !</p>
      <div className="dashboard__list">
        <div className="dashboard__card">
          <div className="dashboard__cardUp">
            <FontAwesomeIcon icon={faUsers} size="lg" className="icon1" />
            <h3>LaunchPage</h3>
          </div>
          <div className="dashboard__cardDown">
            <p>Total No. of Employees Visited</p>
            <p className="dashboard__count">2</p>
          </div>
        </div>
        <div className="dashboard__card">
          <div className="dashboard__cardUp">
            <FontAwesomeIcon icon={faUsers} size="lg" className="icon1" />
            <h3>LaunchPage</h3>
          </div>
          <div className="dashboard__cardDown">
            <p>High Risk Employee</p>
            <p className="dashboard__count">1</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
