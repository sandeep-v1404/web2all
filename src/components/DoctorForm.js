import React from "react";
import "./DoctorForm.css";
function DoctorForm() {
  return (
    <div className="employeeForm">
      <form action="">
        <label htmlFor="doctorname">
          Doctor Name <span className="span">*</span>:
        </label>
        <input
          type="text"
          id="doctorname"
          className="employeeForm__input"
          placeholder="Enter Doctor Name"
          required="true"
        />
        <label htmlFor="username">UserName</label>
        <input
          type="text"
          id="mobileNo"
          className="employeeForm__input"
          placeholder="Enter UserName"
          required="true"
        />
        <label htmlFor="email">Email Id</label>
        <input
          type="text"
          id="email"
          placeholder="Enter Email Id"
          className="employeeForm__input"
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Enter Password"
          className="employeeForm__input"
        />

        <label htmlFor="number">Mobile Number</label>
        <input type="text" id="number" className="employeeForm__input" />
        <label htmlFor="qualification">Qualification</label>
        <input type="text" id="qualification" className="employeeForm__input" />
        <label htmlFor="designation">Designation</label>
        <input type="text" id="designation" className="employeeForm__input" />

        <label htmlFor="experience">Experience</label>
        <input type="text" id="experience" className="employeeForm__input" />
        <label htmlFor="yearsofExperience">Years of Experience</label>
        <input
          type="text"
          id="yearsofExperience"
          className="employeeForm__input"
        />

        <input
          type="submit"
          value="Submit"
          className="employeeForm__inputSubmit"
        />
      </form>
    </div>
  );
}

export default DoctorForm;
