import React from "react";
import "./Sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

import {
  faBars,
  faHome,
  faUser,
  faUserMd,
} from "@fortawesome/free-solid-svg-icons";
function Sidebar() {
  return (
    <div className="sidebar">
      <input type="checkbox" checked="false" id="check"></input>
      <header>
        <div className="navbar__left">
          <h3>
            Allo<span>Lab</span>
          </h3>

          <label htmlFor="check">
            <FontAwesomeIcon icon={faBars} size="lg" className="icon1" />
          </label>
        </div>

        <div className="navbar__right">
          <Button>Profile</Button>
        </div>
      </header>
      <div className="sidebar__left">
        <p>Navigation</p>

        <div className="sidebar__item">
          <Link to="/dashboard" className="item__link">
            <FontAwesomeIcon icon={faHome} size="xs" className="icon iconf" />
            <h4>Dashboard</h4>
          </Link>
        </div>
        <div className="sidebar__item">
          <Link to="/doctors" className="item__link">
            <FontAwesomeIcon icon={faUserMd} size="xs" className="icon iconf" />
            <h4>Doctors</h4>
          </Link>
        </div>

        <div className="sidebar__item">
          <Link to="/humanresources" className="item__link">
            <FontAwesomeIcon icon={faUser} size="xs" className="icon iconf" />
            <h4>Human Resources</h4>
          </Link>
        </div>
        <div className="sidebar__item">
          <Link to="/employees" className="item__link">
            <FontAwesomeIcon icon={faUser} size="xs" className="icon iconf" />
            <h4>Employee</h4>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
