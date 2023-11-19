import './App.css';
import Navbar from './components/Navbar';
import Description from './components/Description';
import AnimatedLogo from './components/AnimatedLogo';
import React, { useEffect, useState } from "react";
import Socials from './components/Socials';


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
          (
            <main>
                <Navbar/>
                <Description/>
                <Socials/>
            </main>
          )
        }    
    </div>
  );
}

export default App;
