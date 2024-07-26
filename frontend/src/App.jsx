import React from 'react';
import Home from "../src/home/Home";
// import Course from './components/Course.jsx'
import { Route, Routes } from "react-router-dom"
import Courses from "./courses/Courses"
import SignUp from './components/SignUp';





function App() {
  return (
    <>
      <div className='dark:bg-slate-900 dark:text-white'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Course" element={<Courses />} />
          <Route path="/SignUp" element={<SignUp />} />
        

         
         
        </Routes>
      </div>
      </>
  );
}

export default App;
