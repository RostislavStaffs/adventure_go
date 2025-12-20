import React from "react";
import "./landing.css";

export default function LandingPage() {
  return (
    <div className="page">
      <header className="navbar">
        <div className="nav-inner">
          <div className="logo">
            Adventure <span>GO</span>
          </div>

          <nav className="nav-links">
            <a href="#">Home</a>
            <a href="#">About us</a>
            <a href="#">Contact</a>
          </nav>

          <div className="nav-actions">
            <a href="#" className="login">Login</a>
            <button className="signup">Sign up</button>
          </div>
        </div>
      </header>

      <section className="hero">
        <div className="hero-overlay">
          <h1>
            Turn every journey into a<br />story
          </h1>
          <p>Log Adventures, relive experiences and keep your memories sealed.</p>
          <button className="cta">Get Started</button>
        </div>
      </section>
    </div>
  );
}
