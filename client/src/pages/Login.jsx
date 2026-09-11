import "./Login.css";

function Login() {
  return (
    <div className="login-page">
      <div className="login-container">

        <div className="login-brand">
          🚗
        </div>

        <h1>Welcome back</h1>

        <p className="login-subtitle">
          Login to your CUCHD SafeRide account
        </p>

        <form className="login-form">

          <div className="form-group">
            <label>CUCHD ID</label>

            <input
              type="text"
              placeholder="Enter your CUCHD ID"
            />
          </div>

          <div className="form-group">
            <label>Password</label>

            <input
              type="password"
              placeholder="Enter your password"
            />
          </div>

          <div className="form-options">
            <label className="remember">
              <input type="checkbox" />
              Remember me
            </label>

            <a href="#">Forgot password?</a>
          </div>

          <button type="submit" className="login-submit">
            Login →
          </button>

        </form>

        <div className="divider">
          <span>OR</span>
        </div>

        <div className="verification-box">
          <span>🔐</span>

          <div>
            <strong>CUCHD Students Only</strong>

            <p>
              Your university identity will be verified
              before you can use SafeRide.
            </p>
          </div>
        </div>

        <p className="signup-text">
          Don't have an account?
          <a href="#"> Create one</a>
        </p>

      </div>
    </div>
  );
}

export default Login;