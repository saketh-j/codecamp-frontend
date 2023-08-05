import React, { useEffect } from 'react';
import Nav2 from '../components/Nav2';
import { SiJavascript } from 'react-icons/si';
import { FaReact } from 'react-icons/fa';
import { BsLaptopFill } from 'react-icons/bs';
import { GrDatabase } from 'react-icons/gr';
import { SiDatagrip } from 'react-icons/si';
import { FaClipboardList } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const MainContent = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigate('/signin');
    }
  }, []);

  const handleRegistration = async (certificationTitle) => {
   try {
     await axios.post(`http://localhost:8000/api/register`, { title: certificationTitle });
     alert('Thankyou Registered successfullly');
   } catch (error) {
     alert('Registration failed');
   }
 };
 

  const certifications = [
    'New Responsive Web Design Certification (300 hours)',
    'Legacy Responsive Web Design Certification (300 hours)',
    'JavaScript Algorithms & Data Structure Certification (300 hours)',
    'Front End Libraries Certification (300 hours)',
    'Data Visualization Certification (300 hours)',
    'Backend Development and API Certification (300 hours)',
    'Quality Assurance Certification (300 hours)',
  ];

  return (
    <div>
      <Nav2 />
      <div className='matter'>
        <div>
          <h1>Welcome to freeCodeCamp.org</h1>
          <h3>
            "I have not failed, I've just founded 10,000 ways <br /> that won't
            work"
          </h3>
          <h3>-- Thomas A. Edison</h3>
          <br />
        </div>
      </div>
      <div className='boxes'>
        <BsLaptopFill className='icons' />
        <p onClick={() => handleRegistration(certifications[0])}>
          {certifications[0]}
        </p>
      </div>
      <div className='boxes'>
        <BsLaptopFill className='icons' />
        <p onClick={() => handleRegistration(certifications[1])}>
          {certifications[1]}
        </p>
      </div>
      <div className='boxes'>
        <SiJavascript className='icons' />
        <p onClick={() => handleRegistration(certifications[2])}>
          {certifications[2]}
        </p>
      </div>
      <div className='boxes'>
        <FaReact className='icons' />
        <p onClick={() => handleRegistration(certifications[3])}>
          {certifications[3]}
        </p>
      </div>
      <div className='boxes'>
        <SiDatagrip className='icons' />
        <p onClick={() => handleRegistration(certifications[4])}>
          {certifications[4]}
        </p>
      </div>
      <div className='boxes'>
        <GrDatabase className='icons' />
        <p onClick={() => handleRegistration(certifications[5])}>
          {certifications[5]}
        </p>
      </div>
      <div className='boxes'>
        <FaClipboardList className='icons' />
        <p onClick={() => handleRegistration(certifications[6])}>
          {certifications[6]}
        </p>
      </div>
    </div>
  );
};

export default MainContent;
