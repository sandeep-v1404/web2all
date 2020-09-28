import { Button } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import "./Employees.css";
function Employees() {
  return (
    <div className="employees">
      <h4>Employee</h4>
      <ul class="breadcrumb">
        <li>
          <Link to="/" className="breadcrumb__links">
            Allolab
          </Link>
        </li>
        <li>Users</li>
        <li>
          <Link to="#" className="breadcrumb__links">
            Employee
          </Link>
        </li>
      </ul>
      <h4>List of Employees</h4>

      <div className="employee__list">
        <div className="employee__card">
          <div className="employee__cardHeading">
            <p>Add New Employee </p>
          </div>
          <div className="employee__cardContent">
            <Link to="/addNewEmployee" className="breadcrumb__links">
              <Button className="employee__cardButton">Add New</Button>
            </Link>
          </div>
        </div>
        <div className="employee__card big">
          <div className="employee__cardHeading">
            <p>
              Import Employee Details <span>(Allow only .xls .xlsx files)</span>
            </p>
          </div>
          <div className="employee__cardContent">
            <input
              accept="xl/*"
              id="contained-button-file"
              multiple
              type="file"
            />
            <label htmlFor="contained-button-file">
              <Button variant="contained" color="primary" component="span">
                Choose File
              </Button>
            </label>
            <Button className="employee__cardButton">Import</Button>
          </div>
        </div>
        <div className="employee__card">
          <div className="employee__cardHeading">
            <p>Export CSV</p>
          </div>
          <div className="employee__cardContent">
            <Button variant="contained" color="primary" component="span">
              Export CSV
            </Button>
          </div>
        </div>
      </div>
      <div className="employee__entries">
        <div className="employee__entryHeading">
          <div className="employee__entryHeadingLeft">
            <label for="entries">Show Entries</label>
            <select name="entries" id="entries">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>
          <div className="employee__entryHeadingRight">
            <label htmlFor="search">Search: </label>
            <input type="search" id="search"></input>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Employees;
