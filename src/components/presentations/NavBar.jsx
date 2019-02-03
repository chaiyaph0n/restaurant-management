import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="navbar-brand">CK Restaurant</div>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navBarContent"
      aria-controls="navBarContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navBarContent">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" to="/reservation">
            Reservation
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/billCall">
            Bill Calculator
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/config">
            Management
          </Link>
        </li>
      </ul>
    </div>
  </nav>
)

export default NavBar
