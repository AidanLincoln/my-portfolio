import Anime from 'react-anime';
import { Link } from 'react-scroll';

export default function Navbar() {
    return(
        <div className="navContainer"> 
                <div className="navTitle">
                    <Anime opacity={[0,1]} easing={"easeInSine"} duration={300}>
                        <Link activeClass="active" to="descriptionComponent" spy={true} smooth={true} duration={500}>
                            <img src={require("../assets/logo.png")} className="logo" alt="logo"/>
                        </Link>
                    </Anime>
                </div>
                <div className="navLink">
                    <Anime translateY={[-10,0]} opacity={[0,1]} easing={"easeInSine"} duration={300} delay={200} >
                        <button className="rhomboidBtn">
                            <Link activeClass="active" to="aboutComponent" spy={true} smooth={true} duration={500} className="rhomboidBtnText">
                                About
                            </Link>
                        </button>
                    </Anime>
                </div>
                <div className="navLink">
                    <Anime translateY={[-10,0]} opacity={[0,1]} easing={"easeInSine"} duration={300} delay={400} >
                        <button className="rhomboidBtn">
                            <Link activeClass="active" to="projectsComponent" spy={true} smooth={true} duration={500} className="rhomboidBtnText">
                                Projects
                            </Link>
                        </button>
                    </Anime>
                </div>
                <div className="navLink">
                    <Anime translateY={[-10,0]} opacity={[0,1]} easing={"easeInSine"} duration={300} delay={600} >
                        <button className="rhomboidBtn">
                            <Link activeClass="active" to="contactComponent" spy={true} smooth={true} duration={500} className="rhomboidBtnText">
                                Contact
                            </Link>
                        </button>
                    </Anime>
                </div>
        </div>
    );
}