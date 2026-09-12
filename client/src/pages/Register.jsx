import { Link } from "react-router-dom";
import "./Register.css";

function Register() {
  return (
    <div className="register-page">

      <div className="register-container">

        <div className="register-header">

          <div className="register-brand">
            🚗
          </div>

          <h1>Create your SafeRide account</h1>

          <p>
            Join the verified CUCHD student community.
          </p>

        </div>

        <div className="verification-banner">
          <span>🔐</span>

          <div>
            <strong>CUCHD Student Verification</strong>

            <p>
              Your university identity will be verified before
              your account is activated.
            </p>
          </div>
        </div>

        <form className="register-form">

          <div className="form-group">

            <label>CUCHD ID</label>

            <input
              type="text"
              placeholder="Enter your CUCHD ID"
            />

            <span className="field-help">
              Use the unique ID provided by Chandigarh University.
            </span>

          </div>

          <div className="form-group">

            <label>University Email</label>

            <input
              type="email"
              placeholder="yourname@cuchd.in"
            />

          </div>

          <div className="form-row">

            <div className="form-group">

              <label>Password</label>

              <input
                type="password"
                placeholder="Create a password"
              />

            </div>

            <div className="form-group">

              <label>Confirm Password</label>

              <input
                type="password"
                placeholder="Confirm password"
              />

            </div>

          </div>

          <div className="preference-section">

            <h3>Safety Preference</h3>

            <p>
              You can change these preferences later.
            </p>

            <label className="checkbox-option">

              <input type="checkbox" />

              <span>
                Prefer matching with students of the same gender
              </span>

            </label>

            <label className="checkbox-option">

              <input type="checkbox" />

              <span>
                Only show rides from verified students
              </span>

            </label>

          </div>

          <button
            type="submit"
            className="register-submit"
          >
            Create Account →
          </button>

        </form>

        <p className="login-link">
          Already have an account?
          <Link to="/login"> Login</Link>
        </p>

      </div>

    </div>
  );
}

export default Register;