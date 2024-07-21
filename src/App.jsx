import React from 'react';
import Navbar from './components/Navbar';
import { Routes, Route, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Home from './components/Home';
import About from './components/About'; // Ensure this is correct
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import './App.css'; // Add custom CSS for animations

function App() {
  const location = useLocation();

  return (
    <div className="app-container">
      <Navbar />
      <div className="content-container">
        <TransitionGroup>
          <CSSTransition
            key={location.key}
            classNames="fade-slide"
            timeout={600} 
          >
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </CSSTransition>
        </TransitionGroup>
      </div>
  </div>
  );
}

export default App;
