import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/layouts/Home';
import InboxUser from './components/InboxUser'
import UserProfile from './components/UserProfile'
import Videos from './components/Videos';
// import './App.css'
const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/inbox" element={<InboxUser />} />
          <Route path="/videos/:pk" element={<Videos />} />
          <Route path="/profile" element={<UserProfile />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
