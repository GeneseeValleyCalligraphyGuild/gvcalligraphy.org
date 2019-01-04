import React from 'react'
import { Link } from 'gatsby'
import github from '../img/github-icon.svg'

const Navbar = () => (
  <nav className="navbar is-transparent">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item" title="Logo">
          Home
        </Link>
      </div>
      <div className="navbar-start">
        <Link className="navbar-item" to="/about-us">
          About Us
        </Link>
        <Link className="navbar-item" to="/membership">
          Membership
        </Link>
         <Link className="navbar-item" to="/meetings">
          Meetings
        </Link>
          <Link className="navbar-item" to="/library">
          Library
        </Link>
          <Link className="navbar-item" to="/workshops">
          Workshops
        </Link>
          <Link className="navbar-item" to="/exhibits">
          Exhibits
        </Link>
          <Link className="navbar-item" to="/resources">
          Resources
        </Link>
          <Link className="navbar-item" to="/links">
          Links
        </Link>
          <a className="navbar-item" href="mailto:gvcalligraphy@gmail.com">
          Contact Us
        </a>
      </div>
      <div className="navbar-end">
        <a
          className="navbar-item"
          href="https://github.com/AustinGreen/gatsby-netlify-cms-boilerplate"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="icon">
            <img src={github} alt="Github" />
          </span>
        </a>
      </div>
    </div>
  </nav>
)

export default Navbar
