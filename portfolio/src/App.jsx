import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from './components/Contact';
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css'  //npm i bootstrap-dark-5 boostrap
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
// import 'bootstrap/dist/css/bootstrap.min.css';
import Aos from "aos";
import "aos/dist/aos.css"
import Certifications from "./components/Certification.jsx";
import Achievements from "./components/Achievement.jsx";


const App = () => {
 useEffect(() => {
  Aos.init();
  
 }, [])
 
  return (
    <>
      <Navbar />
      <div className="container">
        <Home />
        <Experience />
        <Skills />
        <Projects />
        <Achievements/>
        <Certifications />
        <Contact />
      </div>
    </>
  );
};

export default App;