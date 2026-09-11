import "./App.css";

function App() {
  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar">
        <div className="logo">
          <span className="logo-icon">🚗</span>
          <span>SafeRide</span>
        </div>

        <div className="nav-links">
          <a href="#how-it-works">How it works</a>
          <a href="#safety">Safety</a>
          <button className="login-btn">Login</button>
          <button className="signup-btn">Get Started</button>
        </div>
      </nav>

      {/* Hero Section */}
      <main>
        <section className="hero">
          <div className="hero-content">
            <div className="verified-badge">
              🔐 CUCHD Student Verified
            </div>

            <h1>
              Your campus.
              <br />
              <span>Your community.</span>
              <br />
              Your safer ride.
            </h1>

            <p className="hero-description">
              Find verified Chandigarh University students travelling
              your way. Match your route, time and preferences — and
              share the journey together.
            </p>

            <div className="hero-buttons">
              <button className="primary-btn">
                🔎 Find a Ride
              </button>

              <button className="secondary-btn">
                🚗 Offer a Ride
              </button>
            </div>

            <div className="trust-row">
              <div>
                <strong>100%</strong>
                <span>Student Verified</span>
              </div>

              <div>
                <strong>🛡️</strong>
                <span>Safety First</span>
              </div>

              <div>
                <strong>👥</strong>
                <span>Campus Community</span>
              </div>
            </div>
          </div>

          {/* Ride Matching Card */}
          <div className="ride-card">
            <div className="card-header">
              <div>
                <span className="small-label">FIND YOUR RIDE</span>
                <h2>Where are you going?</h2>
              </div>

              <span className="card-icon">🚘</span>
            </div>

            <div className="location-input">
              <span className="dot pickup"></span>
              <div>
                <small>Pickup</small>
                <p>Sector 17, Chandigarh</p>
              </div>
            </div>

            <div className="route-line"></div>

            <div className="location-input">
              <span className="dot destination"></span>
              <div>
                <small>Destination</small>
                <p>Chandigarh University</p>
              </div>
            </div>

            <div className="ride-options">
              <div>
                <small>DATE</small>
                <p>📅 Today</p>
              </div>

              <div>
                <small>TIME</small>
                <p>🕐 8:00 AM</p>
              </div>
            </div>

            <button className="search-btn">
              Find Matching Rides →
            </button>

            <div className="verified-note">
              ✓ Only verified CUCHD students
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="features" id="safety">
          <div className="section-heading">
            <span>BUILT FOR STUDENTS</span>
            <h2>Travel together. Travel safer.</h2>
          </div>

          <div className="feature-grid">
            <div className="feature-card">
              <div className="feature-icon">🔐</div>
              <h3>Verified Students</h3>
              <p>
                Every member is verified using their university
                credentials.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🧠</div>
              <h3>Smart Matching</h3>
              <p>
                Find rides based on compatible routes, timings and
                preferences.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🛡️</div>
              <h3>Safety First</h3>
              <p>
                Ratings, reporting, blocking and safety tools help
                create a trusted community.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">💬</div>
              <h3>Private Chat</h3>
              <p>
                Communicate inside the platform without immediately
                sharing personal contact details.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="logo">
          <span className="logo-icon">🚗</span>
          <span>SafeRide</span>
        </div>

        <p>Made for the CUCHD student community.</p>
      </footer>
    </div>
  );
}

export default App;