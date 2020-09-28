import { Button } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import "./Doctors.css";
function Doctors() {
  return (
    <div className="doctors">
      <h4>Doctor</h4>
      <ul class="breadcrumb">
        <li>
          <Link to="/" className="breadcrumb__links">
            Allolab
          </Link>
        </li>
        <li>Users</li>
        <li>
          <Link to="#" className="breadcrumb__links">
            Doctor
          </Link>
        </li>
      </ul>
      <h4>List of Doctors</h4>

      <div className="doctor__list">
        <div className="doctor__card">
          <div className="doctor__cardHeading">
            <p>Add New Doctor </p>
          </div>
          <div className="doctor__cardContent">
            <Link to="/addNewDoctor" className="breadcrumb__links">
              <Button className="doctor__cardButton">Add New</Button>
            </Link>
          </div>
        </div>
        <div className="doctor__card big">
          <div className="doctor__cardHeading">
            <p>
              Import doctor Details <span>(Allow only .xls .xlsx files)</span>
            </p>
          </div>
          <div className="doctor__cardContent">
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
            <Button className="doctor__cardButton">Import</Button>
          </div>
        </div>
        <div className="doctor__card">
          <div className="doctor__cardHeading">
            <p>Export CSV</p>
          </div>
          <div className="doctor__cardContent">
            <Button variant="contained" color="primary" component="span">
              Export CSV
            </Button>
          </div>
        </div>
      </div>
      <div className="doctor__entries">
        <div className="doctor__entryHeading">
          <div className="doctor__entryHeadingLeft">
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
          <div className="doctor__entryHeadingRight">
            <label htmlFor="search">Search: </label>
            <input type="search" id="search"></input>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Doctors;
