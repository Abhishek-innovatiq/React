import React, { useState } from "react";
import "./LoginDashboard.css";

function LoginDashboard() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [submittedData, setSubmittedData] = useState(null);

  const handleLogin = () => setIsLoggedIn(true);

  const handleLogout = () => {
    setIsLoggedIn(false);
    setSubmittedData(null);
     setName("");
    setEmail("");
    setPassword("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmittedData({ name, email, password });

    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="container">
      <h2>Login Form Example</h2>

      {isLoggedIn ? (
        <div>
          <h3>Welcome Dashboard</h3>

          <form onSubmit={handleSubmit}>
            <input
              className="input-box"
              type="text"
              placeholder="Enter your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <input
              className="input-box"
              type="email"
              placeholder="Enter your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <input
              className="input-box"
              type="password"
              placeholder="Enter your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button className="btn" type="submit">
              Submit
            </button>
          </form>

          {submittedData && (
            <div className="data-box">
              <h3>Submitted Data:</h3>
              <p>
                <b>Name:</b> {submittedData.name}
              </p>
              <p>
                <b>Email:</b> {submittedData.email}
              </p>
              <p>
                <b>Password:</b> {submittedData.password}
              </p>
            </div>
          )}

          <button className="btn logout-btn" onClick={handleLogout}>
            Logout
          </button>
        </div>
      ) : (
        <div>
          <h3>Please Login First</h3>
          <button className="btn" onClick={handleLogin}>
            Login
          </button>
        </div>
      )}
    </div>
  );
}

export default LoginDashboard;
