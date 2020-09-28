import React from "react";
import "./AddNewEmployee.css";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import EmployeeForm from "./EmployeeForm";
function AddNewEmployee() {
  return (
    <div className="employees">
      <h4>Add Employee</h4>
      <div className="employee__nav">
        <div className="employee__NavLeft">
          <ul class="breadcrumb">
            <li>
              <Link to="/" className="breadcrumb__links">
                Allolab
              </Link>
            </li>
            <li>Users</li>
            <li>
              <Link to="#" className="breadcrumb__links">
                Add Employee
              </Link>
            </li>
          </ul>
        </div>
        <div className="employee__NavRight">
          <Button href="/employees">Back to Listings Page</Button>
        </div>
      </div>
      <div className="employee__details">
        <EmployeeForm />
      </div>
    </div>
  );
}

export default AddNewEmployee;
