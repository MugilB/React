import React from 'react';
import './App.css';
import SignInSide from './components/SignInSide';
import SignUpSide from './components/SignUpSide';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Bhome from './components/Bhome';
import Bland from './components/Bland';
import Bapart from './components/Bapart';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SignInSide />} />
        <Route path="/signup" element={<SignUpSide />} />
        <Route path="/main" element={<LandingPage />} />
        <Route path="/buy/houses" element={<Bhome />} />
        <Route path="/buy/land" element={<Bland />} />
        <Route path="/buy/apartments" element={<Bapart />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/details/:type/:id/:heading/:description" element={<Contact />} />           
        <Route path="/buy/apartments/:id/:heading/:description" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
