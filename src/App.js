import './App.css';
import Navbar from './components/Navbar';
import Description from './components/Description';
import AnimatedLogo from './components/AnimatedLogo';
import React, { useEffect, useState } from "react";
import Socials from './components/Socials';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'


function App() {
  const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 2300);
    }, []);

  return (
    <div className='App'>
       {loading ? (<AnimatedLogo/>) :
          <Router>
            {/* NAVBAR CAUSING FLICKERING SOMETIMES? IM GOING TO GO CRAZY. RELOADING APP OVER AND OVER SHOWS THIS ISSUE */}
            <Navbar/> 
            <Socials/>
            <Routes>
              <Route path="/" element={<Description/>}/> 
              <Route path="/about" element={<div>hello</div>} />
          
            </Routes>
          </Router>    
        }    
    </div>
  );
}

export default App;
