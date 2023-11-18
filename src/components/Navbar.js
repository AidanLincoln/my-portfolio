import RhomboidButton from "./RhomboidButton";
import Anime from 'react-anime';
import Logo from "./logo";

export default function Navbar() {
    return(
        <div className="navContainer"> 
                <div className="navTitle">
                    <Anime opacity={[0,1]} easing={"easeInSine"} duration={300} delay={0} >
                        <Logo></Logo>
                    </Anime>
                </div>
                <div className="navLink">
                    <Anime translateY={[-10,0]} opacity={[0,1]} easing={"easeInSine"} duration={300} delay={200} >
                        <RhomboidButton text="About"></RhomboidButton>
                    </Anime>
                </div>
                <div className="navLink">
                    <Anime translateY={[-10,0]} opacity={[0,1]} easing={"easeInSine"} duration={300} delay={400} >
                        <RhomboidButton text="Projects"></RhomboidButton>
                    </Anime>
                </div>
                <div className="navLink">
                    <Anime translateY={[-10,0]} opacity={[0,1]} easing={"easeInSine"} duration={300} delay={600} >
                        <RhomboidButton text="Contact"></RhomboidButton>
                    </Anime>
                </div>

        </div>
    );
}