import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import MainContent from './pages/MainContent';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<Home />} />
         <Route path="/mainContent" element={<MainContent />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
