import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import './Navbar.css';

const Navbar = () => {
  return (
    <>
    <nav>
      <div className="logo-container">
        <Link to="home" style={{ textDecoration: 'none', color: "#fff" }}>
            <h3>Coooktails</h3>
        </Link>
      </div>
      <div className="page-container">
        <Link to="about" style={{ textDecoration: 'none', color: "#fff" }}>
            <span>About</span>
        </Link>
        <Link to="home" style={{ textDecoration: 'none', color: "#fff" }}>
            <span>Home</span>
        </Link>
        <Link to="cocktails/random" style={{ textDecoration: 'none', color: "#fff" }}>
          <span>Random</span>
        </Link>
      </div>
    </nav>
    <Outlet/>
    </>
  )
}

export default Navbar
