import { NavLink } from "react-router-dom";
import "./Signup.css";

function Signup() {
  return (
    <div className="signup-container">
      <div className="signup-card">
        <h2 className="signup-title">Create Account</h2>
        <p className="signup-subtitle">Join us and start your journey</p>

        <form className="signup-form">
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <input type="password" placeholder="Confirm Password" required />
          <button type="submit">Sign Up</button>
        </form>

        <p className="signup-footer">
          Already have an account?  <NavLink to="/login" className={({ isActive }) => isActive ? "active" : ""}>
              Login
            </NavLink>
        </p>
      </div>
    </div>
  );
}

export default Signup;
