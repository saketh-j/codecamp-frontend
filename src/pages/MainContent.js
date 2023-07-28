import React, { useEffect } from 'react';
import Nav2 from '../components/Nav2';
import {SiJavascript} from 'react-icons/si'
import {FaReact} from 'react-icons/fa'
import {BsLaptopFill} from 'react-icons/bs'
import {GrDatabase} from 'react-icons/gr'
import {SiDatagrip} from 'react-icons/si'
import {FaClipboardList} from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';

const MainContent = () => {
    const navigate =useNavigate();

    useEffect(()=>{
         if(!localStorage.getItem('token')){
            navigate('/signin')
         }
    },[])
  return (
    <div>
       <Nav2/>
       <div className='matter'>
         <div> <h1>Welcome to free CodeCamp.org</h1>
        <h3>"I have not failed, I've just founded 10,000 ways <br /> that won't work"</h3>
        <h3>-- Thomas A. Edison</h3>
        <br />
        </div>
       </div>
       <div className='boxes'>
            <BsLaptopFill className='icons'/>
            <p>(New) Responsive Web Design Certification (300 hours)</p>
         </div>
         <div className='boxes'>
            <BsLaptopFill className='icons'/>
            <p> Legacy Responsive Web Design Certification (300 hours)</p>
         </div>
         <div className='boxes'>
            <SiJavascript className='icons'/>
            <p>JavaScript Algorithams & Data Structure Certification (300 hours)</p>
         </div>
         <div className='boxes'>
            <FaReact className='icons'/>
            <p>Front End Libraries Certification (300 hours)</p>
         </div>
         <div className='boxes'>
         <SiDatagrip className='icons'/>
            <p>Data Visiualization Certification (300 hours)</p>
         </div>
         <div className='boxes'>
         <GrDatabase className='icons'/>
            <p>Backend Development and API Certification (300 hours)</p>
         </div>
         <div className='boxes'>
            <FaClipboardList className='icons'/>
            <p>Quality Assurance Certification (300 hours)</p>
         </div>
    </div>
  );
}

export default MainContent;
