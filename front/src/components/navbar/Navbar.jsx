import { useState,useRef, useContext } from "react";
import './navbar.css';
import logo from "../auth/img/pi.jpg";
import { Link, Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import { Button } from "react-bootstrap";

export const Navbar = () => {

  const { dispatch } = useContext(AuthContext);

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      dispatch({ type: "LOGOUT" });
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }
  };
  
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
                <li><Link to="/login"><Button color="secondary" onClick={handleClick}>Cerrar Sesión</Button></Link></li>
            </ul>
        </nav>
      </div>
  )
}