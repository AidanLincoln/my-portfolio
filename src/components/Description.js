import Anime from 'react-anime';

export default function Description() {
    return(
        <Anime translateY={[20,0]} opacity={[0,1]} easing={"easeInSine"} duration={500} delay={1000} >
            <div className="descriptionContainer">           
                <div className="descriptionText1">Hi, my name is</div>
                <div className="descriptionText2">Aidan Lincoln.</div>
                <div className="descriptionText3">I create better digital experiences.</div>
                <div className="descriptionText4">I'm a software engineer based in Seattle. blah blah balh blah blah nlah ujhbagjwg agwag gw.</div>    
            </div>
        </Anime>
);
}