import { useState,useRef } from "react";
import './navbar.css';
import logo from "../auth/img/pi.jpg";
import { Link } from "react-router-dom";

export const Navbar = () => {
  
  return (
      <div className="navContainer">
        <nav className="nav">
            <button className="btnToggle">
                <i className="bi bi-list fs-1"></i>
            </button>
            <ul className="ul">
                <li><Link to="/"><a><img className="imgLogo" width={'100px'} src={logo} alt="logo" /></a></Link></li>
               <li><Link to="/"><a>Tareas</a></Link></li>
                <li><Link to="/tasks-done"><a>Tareas Realizadas</a></Link></li>
            </ul>
        </nav>
      </div>
  )
}