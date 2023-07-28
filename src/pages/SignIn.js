import React, { useState } from 'react';

const SignIn = ({ setIsAuthenticated }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function signin(event) {
    event.preventDefault();
    const response = await fetch('http://localhost:8000/api/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await response.json(); 

    if (data.user) {
      localStorage.setItem('token', data.user);
      alert('Signin successful');
    
      window.location.href = '/mainContent';
    } else {
      alert('Please check your username and password');
    }
  }

  return (
    <div className="signin-container">
      <h1>Signin</h1>
      <form onSubmit={signin}>
        <div className="form-group">
          <label>Email:</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />
        </div>
        <div className="form-group">
          <input type="submit" value="signin" />
        </div>
      </form>
    </div>
  );
};

export default SignIn;
