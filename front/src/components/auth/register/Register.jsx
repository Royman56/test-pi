import React, { useEffect, useState } from "react";
import logo from "../img/pi.jpg";
import email from "../img/email.png";
import password from "../img/password.png";
import user from "../img/user.png";
import "../auth.css";
import { useForm } from "react-hook-form";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
const axios = require("axios");

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    axios.post("http://localhost:8800/register", data).then(() => {
      window.location.href = "/";
    });
  };

  return (
      <div className="main-auth">
        <div className="sub-main-auth">
          <div>
            <div className="imgs">
              <div className="container-image">
                <img src={logo} alt="profile" className="profile" />
              </div>
            </div>
            <div>
              <h1 className="center">Registrarse</h1>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                <img src={user} alt="user" className="email-auth" />
                  <input
                    className="name input-auth"
                    defaultValue=""
                    {...register("username", { required: true })}
                    type="text"
                    placeholder="Nombre de usuario"
                  />
                </div>
                {errors.name?.type === "required" && "Falta este campo"}
                <div className="second-input">
                  <img src={email} alt="email" className="email-auth" />
                  <input
                    className="name input-auth"
                    defaultValue=""
                    {...register("email", { required: true, minLength: 5 })}
                    type="text"
                    placeholder="Correo Eléctronico"
                  />
                </div>
                <div className="second-input">
                  <img src={password} alt="pass" className="email-auth" />
                  <input
                    className="name input-auth"
                    defaultValue=""
                    {...register("password", { required: true, minLength: 5 })}
                    type="password"
                    placeholder="Contraseña"
                  />
                </div>

                <div className="login-button">
                  <button className="btn-auth button-auth" type="submit">
                    Registrarse
                  </button>
                </div>
                <p className="link center">
                  <span >Ya tienes una cuenta?</span>
                  <Link to="/login">
                    {" "}
                    <a>Iniciar Sesión</a>
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Register;
