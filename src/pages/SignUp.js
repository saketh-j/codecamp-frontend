import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {FcGoogle} from 'react-icons/fc'

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function signup(event) {
    event.preventDefault();

    const response = await fetch('http://localhost:8000/api/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });

    if (response.status === 200) {
        alert('Signup successful. Please login.');
        window.location.href = '/signin';
      } else if (response.status === 409) {
        // Email id already exists
        const data = await response.json();
        alert(data.error);
      } else {
        alert('An error occurred during signup. Please try again later.');
      }
    }

  return (
    <div className="signup-container">
      <h1>SignUp</h1>
      <form onSubmit={signup}>
        <div className="form-group">
          <label htmlFor="name">Name</label><br />
          <input
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Enter your name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label><br />
          <input
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Enter your email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label><br />
          <input
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Enter your password"
          />
        </div>
        <div className="form-group">
          <input type="submit" value="Sign Up" />
           <h5>Already have an account Please <Link to={'/signin'}>SignIn</Link> or</h5>
        </div>
        <div>
            <button className='google'>Signup with Google <FcGoogle/></button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
