import './App.css';
import Navbar from './components/Navbar';
import Description from './components/Description';
import AnimatedLogo from './components/AnimatedLogo';
import React, { useEffect, useState } from "react";
import Socials from './components/Socials';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

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
          <main>
            <Navbar/> 
            <Socials/>
            <Description/>
            <About/>
            <Projects/>
            <Contact/>
          </main>
        }    
    </div>
  );
}

export default App;
