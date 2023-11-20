import RhomboidButton from "./RhomboidButton";
import Anime from 'react-anime';
import Logo from "./Logo";
import { Link } from "react-router-dom";


export default function Navbar() {
    return(
        <div className="navContainer"> 
                <div className="navTitle">
                    <Anime opacity={[0,1]} easing={"easeInSine"} duration={300} delay={0} >
                        <Link to="/">
                            <Logo/>
                        </Link>
                    </Anime>
                </div>
                <div className="navLink">
                    <Anime translateY={[-10,0]} opacity={[0,1]} easing={"easeInSine"} duration={300} delay={200} >
                        <RhomboidButton text="About" route="/about"></RhomboidButton>
                    </Anime>
                </div>
                <div className="navLink">
                    <Anime translateY={[-10,0]} opacity={[0,1]} easing={"easeInSine"} duration={300} delay={400} >
                        <RhomboidButton text="Projects" route="/projects"></RhomboidButton>
                    </Anime>
                </div>
                <div className="navLink">
                    <Anime translateY={[-10,0]} opacity={[0,1]} easing={"easeInSine"} duration={300} delay={600} >
                        <RhomboidButton text="Contact" route="/contact"></RhomboidButton>
                    </Anime>
                </div>

        </div>
    );
}