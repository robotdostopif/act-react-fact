import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Home from './contents/Home'
import Navbar from './components/Navbar';
import Education from './contents/Education';
import Skills from './components/Skills';
import Contact from './contents/Contact';

function App() {
    return (
      
      <div className="App">
      <Navbar />
      <div className="articles">
      <Home />
      <Education />
      <Skills />
      <Contact />
      </div>
      </div>
      );
}
export default App;
