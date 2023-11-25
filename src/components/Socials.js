import Anime from 'react-anime';

export default function Socials(){
    return( 
        <div className='socialsContainer'>
            <ul className='socialsUL'>
                <li className='socialsLI'>  
                    <Anime translateY={[-10,0]} opacity={[0,1]} easing={"easeInSine"} duration={300} delay={1600}>  
                        <a href='https://github.com/AidanLincoln' target="_blank" rel="noopener noreferrer">
                            <img src={require("../assets/github-icon.png")} className="socialIcon" alt="githubIcon"></img>   
                        </a>
                    </Anime>
                </li>  
                <li className='socialsLI'>
                    <Anime translateY={[-10,0]} opacity={[0,1]} easing={"easeInSine"} duration={300} delay={1500}>  
                        <a href='https://www.linkedin.com/in/aidan-lincoln/' target="_blank" rel="noopener noreferrer">
                            <img src={require("../assets/linkedin-icon.png")} className="socialIcon" alt="linkedinIcon"></img>      
                        </a>
                    </Anime>
                </li>   
                <li className='socialsLI'>
                    <Anime translateY={[-10,0]} opacity={[0,1]} easing={"easeInSine"} duration={300} delay={1400}>
                        <a href="mailto:aidantlincoln@gmail.com" target="_blank" rel="noopener noreferrer">
                            <img src={require("../assets/email-icon.png")} className="socialIcon" alt="emailIcon"></img>      
                        </a>
                    </Anime>
                </li>   
            </ul>  
        </div>       
    )
}