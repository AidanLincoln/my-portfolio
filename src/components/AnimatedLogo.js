import Anime from 'react-anime';

export default function AnimatedLogo() {
    return (
        <div className='animatedLogoWrapper'>
            <Anime opacity={[1,0]} easing={"linear"} duration={300} delay={2000}>
                <Anime opacity={[0,1]} easing={"easeInSine"} duration={300} delay={100} >
                    <img src={require("../assets/logop1.png")} className="animatedLogo" alt="logop1"/>
                </Anime>

                <Anime opacity={[0,1]} easing={"easeInSine"} duration={300} delay={400} >
                    <img src={require("../assets/logop2.png")} className="animatedLogo" alt="logop2"/>
                </Anime>

                <Anime opacity={[0,1]} easing={"easeInSine"} duration={300} delay={700} >
                    <img src={require("../assets/logop3.png")} className="animatedLogo" alt="logop3"/>
                </Anime>

                <Anime opacity={[0,1]} easing={"easeInSine"} duration={300} delay={1000} >
                    <img src={require("../assets/logop4.png")} className="animatedLogo" alt="logop4"/>
                </Anime>
            </Anime>
        </div>
    )
}