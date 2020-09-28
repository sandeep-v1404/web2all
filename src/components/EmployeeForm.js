import React from "react";
import "./EmployeeForm.css";
function EmployeeForm() {
  return (
    <div className="employeeForm">
      <form action="">
        <label htmlFor="employeeId">EmployeeID:</label>
        <input
          type="text"
          id="employeeId"
          className="employeeForm__input"
          placeholder="Enter EmployeeID"
        />
        <label htmlFor="employeeName">
          EmployeeName <span className="span">*</span>:
        </label>
        <input
          type="text"
          id="employeeName"
          className="employeeForm__input"
          placeholder="Enter Employee Name"
          required="true"
        />
        <label htmlFor="mobileNo">Mobile No:</label>
        <input
          type="text"
          id="mobileNo"
          className="employeeForm__input"
          placeholder="Enter Mobile Number"
          required="true"
        />
        <label htmlFor="human">Human Resources:</label>
        <select id="human" className="employeeForm__select">
          <option value="Select">Select</option>
        </select>
        <label htmlFor="doctor">Doctor</label>
        <select id="doctor" className="employeeForm__select">
          <option value="Select">Select</option>
        </select>
        <label htmlFor="age">Age</label>
        <input
          type="text"
          id="age"
          className="employeeForm__input"
          placeholder="Enter Age"
        />

        <label htmlFor="gender">Gender</label>
        <select id="gender" className="employeeForm__select">
          <option value="Select">Select</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Others">Others</option>
        </select>
        <label htmlFor="bloodgroup">Blood Group</label>
        <input type="text" id="bloodgroup" className="employeeForm__input" />
        <label htmlFor="locality">Locality</label>
        <input type="text" id="locality" className="employeeForm__input" />

        <input
          type="submit"
          value="Submit"
          className="employeeForm__inputSubmit"
        />
      </form>
    </div>
  );
}

export default EmployeeForm;
