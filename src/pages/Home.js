import React from 'react';
import Navbar from '../components/Navbar';
import Img from '../components/Img';
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <>
        <Navbar/>
        <div className='text-container'>
             <div>
                <h1>Learn to Code for free</h1>
                <h1>Build projects</h1>
                <h1>Earn Certifications</h1>
                <p>Since 2014 more than 40,000 CodeCamp.org Graduates have gotten <br />job at Tech companies Including</p>
             </div>
        </div>
        <Img/>
        <br />
        <br />
        <Link to={'/signup'} className='button'>Get started (it's free)</Link>
    </>
  );
}

export default Home;
