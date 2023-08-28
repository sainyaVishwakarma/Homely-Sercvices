import React from 'react';
import '../styles/header.css';

const NavBar = props =>

<nav className="navbar navbar-expand-lg navbar-dark ">
  <a className="navbar-brand" href="/">{/*<img src={servis} alt="" />*/}<b>Homely</b></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav ml-auto text-uppercase">
      <li className="nav-item ">
        <a className="nav-link" href="/">Home</a>
      </li>
      <li className="nav-item ">
        <a className="nav-link" href="/about">Aboutus</a>
      </li>
      <li className="nav-item ">
        <a className="nav-link" href="/contact">ContactUs</a>
      </li>
      
      <li className="nav-item">
        <a className="nav-link" href="/login">Login</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/signup">Sign Up</a>
      </li>
    </ul>
  </div>
</nav>

const Header = () => (
    <header>
      <NavBar />
    </header>
);

export default Header;