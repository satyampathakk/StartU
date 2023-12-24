// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from '../src/components/Navbar';
// import { useSelector, useDispatch, Provider } from 'react-redux';
// import { add,sub } from '../src/store/slice';


// const App = () => {
//   const dispatch = useDispatch();
//   const value=useSelector((state)=>state.value)

//   return (
//     <>

//         <p onClick={() => dispatch(add())}>click here!{value} </p>
//         <p onClick={() => dispatch(sub())}>click here!{value} </p>
//       {/* 
//       <Router>
//         <Routes>
//           <Route path="/">
//             <Navbar></Navbar>
//           </Route>
//         </Routes>
//       </Router> 
//       */}
//       </>
//   );
// }

// export default App;

// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/layouts/Home';
import InboxUser from './components/InboxUser'
import Player from './components/Player'
import UserProfile from './components/UserProfile'
import './app.css';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/inbox" element={<InboxUser />} />
          <Route path="/video" element={<Player />} />
          <Route path="/profile" element={<UserProfile />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
