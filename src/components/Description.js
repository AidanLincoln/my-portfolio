import Anime from 'react-anime';

export default function Description() {
    return(
        <div className="componentContainer" id="descriptionComponent">
            <div>
                <Anime translateY={[10,0]} opacity={[0,1]} easing={"easeInSine"} duration={300} delay={800} >           
                    <div className="smallTextCyan" style={{marginBottom: "4%"}}>Hi, my name is</div>
                </Anime>
                <Anime translateY={[10,0]} opacity={[0,1]} easing={"easeInSine"} duration={300} delay={900} >   
                    <div className="largeTextLight">Aidan Lincoln.</div>
                </Anime>
                <Anime translateY={[10,0]} opacity={[0,1]} easing={"easeInSine"} duration={300} delay={1000} > 
                    <div className="largeTextGrey">I create better digital experiences.</div>
                </Anime>
                <Anime translateY={[10,0]} opacity={[0,1]} easing={"easeInSine"} duration={300} delay={1100} > 
                    <div className="smallTextLight" style={{marginTop: "4%"}}>I'm a software engineer based in Seattle. blah blah balh blah blah nlah ujhbagjwg agwag gw.</div>    
                </Anime>
            </div>
        </div>
);
}