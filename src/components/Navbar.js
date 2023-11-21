import Anime from 'react-anime';
import { Link } from "react-router-dom";


export default function Navbar() {
    return(
        <div className="navContainer"> 
                <div className="navTitle">
                    <Anime opacity={[0,1]} easing={"easeInSine"} duration={300}>
                        <Link to="/">
                            <img src={require("../assets/logo.png")} className="logo" alt="logo"/>
                        </Link>
                    </Anime>
                </div>
                <div className="navLink">
                    <Anime translateY={[-10,0]} opacity={[0,1]} easing={"easeInSine"} duration={300} delay={200} >
                        <button className="rhomboidBtn">
                            <Link to="/about" className="rhomboidBtnText">About</Link>
                        </button>
                    </Anime>
                </div>
                <div className="navLink">
                    <Anime translateY={[-10,0]} opacity={[0,1]} easing={"easeInSine"} duration={300} delay={400} >
                        <button className="rhomboidBtn">
                            <Link to="/projects" className="rhomboidBtnText">Projects</Link>
                        </button>
                    </Anime>
                </div>
                <div className="navLink">
                    <Anime translateY={[-10,0]} opacity={[0,1]} easing={"easeInSine"} duration={300} delay={600} >
                        <button className="rhomboidBtn">
                            <Link to="/contact" className="rhomboidBtnText">Contact</Link>
                        </button>
                    </Anime>
                </div>

        </div>
    );
}