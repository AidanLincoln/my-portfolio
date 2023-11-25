import Anime from 'react-anime';

export default function Description() {
    return(
        <div className="descriptionContainer">
            <Anime translateY={[10,0]} opacity={[0,1]} easing={"easeInSine"} duration={300} delay={800} >           
                <div className="descriptionText1">Hi, my name is</div>
            </Anime>
            <Anime translateY={[10,0]} opacity={[0,1]} easing={"easeInSine"} duration={300} delay={900} >   
                <div className="descriptionText2">Aidan Lincoln.</div>
            </Anime>
            <Anime translateY={[10,0]} opacity={[0,1]} easing={"easeInSine"} duration={300} delay={1000} > 
                <div className="descriptionText3">I create better digital experiences.</div>
            </Anime>
            <Anime translateY={[10,0]} opacity={[0,1]} easing={"easeInSine"} duration={300} delay={1100} > 
                <div className="descriptionText4">I'm a software engineer based in Seattle. blah blah balh blah blah nlah ujhbagjwg agwag gw.</div>    
            </Anime>
        </div>
);
}