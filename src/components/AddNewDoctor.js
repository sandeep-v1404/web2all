import React from "react";
import "./AddNewEmployee.css";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import DoctorForm from "./DoctorForm";
function AddNewDoctor() {
  return (
    <div className="employees">
      <h4>Add Doctor</h4>
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
                Add Doctor
              </Link>
            </li>
          </ul>
        </div>
        <div className="employee__NavRight">
          <Button href="/doctors">Back to Listings Page</Button>
        </div>
      </div>
      <div className="employee__details">
        <DoctorForm />
      </div>
    </div>
  );
}

export default AddNewDoctor;
