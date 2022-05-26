import axios from "axios";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "../auth.css";
import logo from "../img/pi.jpg";
import password from "../img/password.png";
import user from "../img/user.png";

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });

  const { loading, error, dispatch } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      dispatch({ type: "LOGIN_START" });
      const res = await axios.post("http://localhost:8800/login", credentials);
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
      navigate("/");
    } catch (err) {
      console.log(err);
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }
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
            <h1 className="center">Iniciar Sesión</h1>
            <div>
              <img src={user} alt="email" className="email-auth" />
              <input
                type="text"
                placeholder="Nombre de usuario"
                id="username"
                onChange={handleChange}
                className="name input-auth"
              />
            </div>
            <div className="second-input">
              <img src={password} alt="pass" className="email-auth" />
              <input
                type="password"
                placeholder="Contraseña"
                id="password"
                onChange={handleChange}
                className="name input-auth"
              />
            </div>
            <div className="login-button">
              <button
                className="btn-auth button-auth"
                disabled={loading}
                onClick={handleClick}
              >
                Login
              </button>
              {error && <span>{error.message}</span>}
            </div>
            <p className="link center">
              <span>No tienes una cuenta?</span>
              <Link to="/register">
                {" "}
                <a>Registrarse</a>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
