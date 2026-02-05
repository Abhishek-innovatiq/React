import React, { useState } from "react";
import "./AdminLogin.css";

function AdminLogin() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Admin Login Data:", formData);

    if (formData.email === "admin@driveeasy.com" && formData.password === "admin123") {
      alert("✅ Admin Login Successful!");
    } else {
      alert("❌ Invalid Admin Credentials!");
    }
  };

  return (
    <div className="admin-login-container">
      <div className="admin-login-box">
        <h2>Admin Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter admin email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter admin password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="admin-btn">Login</button>
        </form>
      </div>
    </div>
  );
}

export default AdminLogin;
