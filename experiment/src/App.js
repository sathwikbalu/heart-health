import logo from './logo.svg';
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './paths/hello';
import Symptom from './paths/symptompage';
import Experiment from './paths/experiment';
import Doctorshomepage from './paths/doctorshomepage';
import Searchpage from './paths/docsea';
import Consult from './paths/consultation';
import Registrationform from './paths/login';
function App() {
  return (
    <>
      
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/registration' element={<Registrationform/>}/>
          <Route path='/symptompage' element={<Symptom/>}/>
          <Route path='/experimentpage' element={<Experiment />} />
          <Route path='/doctorspage' element={<Doctorshomepage/>}/>
          <Route path="/docsearch" element={<Searchpage/>}/>
          <Route path="/consultation" element={<Consult />} />
        </Routes>
      </Router>
    
    </>
  );
}

export default App;
