import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/home';
import About from './components/about';
import WhyChooseUs from './components/WhyChooseUs';
import 'animate.css/animate.min.css'; // Import Animate.css
import HowItWorks from './components/HowItWorks';

function App() {
  return (
    <Router>
      <div className="App animate__animated animate__fadeInUp">
        <Navbar />
        <Routes>
          <Route exact path="/" element={
            <div className="animate__animated animate__fadeInUp">
              <Home />
            </div>
          } />
          <Route path="/how-it-works" element={
            <div className="animate__animated animate__fadeInUp">
              <HowItWorks />
            </div>
          } />
          <Route path="/about" element={
            <div className="animate__animated animate__fadeInUp">
              <About />
            </div>
          } />
          <Route path="/why-choose-us" element={
            <div className="animate__animated animate__fadeInUp">
              <WhyChooseUs />
            </div>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
