import './App.css';
import Navbar from './components/Navbar';
import Description from './components/Description';
import AnimatedLogo from './components/AnimatedLogo';
import React, { useEffect, useState } from "react";


function App() {
  const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 2500);
    }, []);

  return (
    <div className='App'>
       {loading ? (<AnimatedLogo/>) :
          (
            <main>
                <Navbar/>
                <Description/>
            </main>
          )
        }

      
    
      
    </div>
  );
}

export default App;
