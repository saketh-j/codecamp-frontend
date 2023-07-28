import React from 'react';
import {Link} from 'react-router-dom'


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="search-bar">
        <input type="text" placeholder="Search" />
      </div>
      <div className="navbar-heading">
        Free Code Camp
      </div>
      <div className="menu-signup">
        <button>Menu</button>
        <button><Link to={'/signup'} className='btn'>Sign Up</Link></button>
      </div>
    </nav>
  );
};

export default Navbar;
