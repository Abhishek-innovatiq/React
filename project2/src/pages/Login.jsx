import React from "react";
import "./Login.css";
import { NavLink } from "react-router-dom";

function Login() {
  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">Welcome Back</h2>
        <p className="login-subtitle">Please log in to continue</p>

        <form className="login-form">
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Login</button>
        </form>

        <p className="login-footer">
          Don’t have an account?  <NavLink to="/signup">
              Signup
            </NavLink>
        </p>
      </div>
    </div>
  );
}

export default Login;
