import React from 'react';
import {PiStudent} from 'react-icons/pi'
import { useNavigate } from 'react-router-dom';


const Nav2 = () => {
    const navigate =  useNavigate();
     const handleLogout =()=>{
        localStorage.removeItem('token')
        navigate('/signin')
     }
  return (
    <nav className="navbar">
      <div className="search-bar">
        <input type="text" placeholder="Search" />
      </div>
      <div className="navbar-heading">
        Free Code Camp
      </div>
      <div className="menu-signup">
        <button>menu</button>
        <button onClick={handleLogout}>Logout</button>
        <PiStudent className='icons'/>
      </div>
    </nav>
  );
};

export default Nav2;
