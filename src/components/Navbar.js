// src/components/Navbar.js

import React from 'react';
import { Link } from 'react-router-dom'; // تأكد من تثبيت react-router-dom
import  './Navbar.css'
const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/signin">Signin</Link>
      <Link to="/signup">Signup</Link>
      <Link to="/categories">Categories</Link>
      <Link to="/products">Products</Link>
      <Link to="/cart">Cart</Link>
    </nav>
  );
};

export default Navbar;
