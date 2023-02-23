import React from "react";
import NavigationBar from "./Dashboard";
import "./styles.css";
import Home from "./Home";
import NCR from "./NCR";
import Observation from "./Observation";
import Task from "./Task";
import Users from "./Users";
import Profile from "./Profile";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/NCR" element={<NCR />} />
          <Route path="/Observation" element={<Observation />} />
          <Route path="/Task" element={<Task />} />
          <Route path="/Users" element={<Users />} />
          <Route path="/Profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
