import React from 'react';
import { Link } from 'react-router-dom'; 

import  './Navbar.css';
const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/signin">Sign In</Link>
      <Link to="/register">Sign up</Link>
      
      <Link to="/cart">Cart</Link>
      <Link to="/categories">Categories</Link>
    </nav>
  );
};

export default Navbar;
