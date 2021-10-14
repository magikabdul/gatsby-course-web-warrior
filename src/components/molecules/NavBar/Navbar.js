import React from 'react';
import { Link } from 'gatsby';
import 'src/components/molecules/NavBar/navbar.scss'

const Navbar = () => (
  <nav>
    <h1>Web Warrior</h1>
    <div className='links'>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/projects">Portfolio Projects</Link>
    </div>
  </nav>
)

export default Navbar;
