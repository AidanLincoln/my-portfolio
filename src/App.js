import './App.css';
import Navbar from './components/Navbar';
import Description from './components/Description';
import AnimatedLogo from './components/AnimatedLogo';
import Socials from './components/Socials';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import React, { useEffect, useState } from "react";
import RevealOnScroll from './components/RevealOnScroll';

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

                <RevealOnScroll>
                  <About/>
                </RevealOnScroll>

                <RevealOnScroll>
                  <Projects/>
                </RevealOnScroll>

                <RevealOnScroll>
                  <Contact/>
                </RevealOnScroll>

                <Footer/>
          </main>
        }    
    </div>
  );
}

export default App;
