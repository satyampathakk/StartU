import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../src/components/Navbar';
import { useSelector, useDispatch, Provider } from 'react-redux';
import { add,sub } from '../src/store/slice';


const App = () => {
  const dispatch = useDispatch();
  const value=useSelector((state)=>state.value)

  return (
    <>

        <p onClick={() => dispatch(add())}>click here!{value} </p>
        <p onClick={() => dispatch(sub())}>click here!{value} </p>
      {/* 
      <Router>
        <Routes>
          <Route path="/">
            <Navbar></Navbar>
          </Route>
        </Routes>
      </Router> 
      */}
      </>
  );
}

export default App;
