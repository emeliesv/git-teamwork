import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav>
        <h1 className='logo'><Link to="/">Travel with Us</Link></h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/booking">Booking</Link>
          </li>
        </ul>
        </nav>
    )
}

export default Header;