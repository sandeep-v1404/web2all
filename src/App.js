import React from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Doctors from "./components/Doctors";
import Humanresources from "./components/Humanresources";
import Employees from "./components/Employees";
import AddNewEmployee from "./components/AddNewEmployee";
import AddNewDoctor from "./components/AddNewDoctor";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/dashboard">
            <Sidebar />
            <Dashboard />
          </Route>
          <Route path="/doctors">
            <Sidebar />
            <Doctors />
          </Route>
          <Route path="/humanresources">
            <Sidebar />
            <Humanresources />
          </Route>
          <Route path="/employees">
            <Sidebar />
            <Employees />
          </Route>
          <Route path="/addNewEmployee">
            <Sidebar />
            <AddNewEmployee />
          </Route>
          <Route path="/addNewDoctor">
            <Sidebar />
            <AddNewDoctor />
          </Route>
          <Redirect to="/dashboard" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
