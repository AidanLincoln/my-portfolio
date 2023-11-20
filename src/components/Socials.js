import Anime from 'react-anime';

export default function Socials(){
    return(
        <Anime opacity={[0,1]} easing={"easeInSine"} duration={300} delay={1000}>
            <div className='socialsContainer'>
                <ul className='socialsUL'>
                    <li className='socialsLI'>    
                        <a href='https://github.com/AidanLincoln'>
                            <img src={require("../assets/github-icon.png")} className="socialIcon" alt="githubIcon"></img>   
                        </a>
                    </li>  
                    <li className='socialsLI'>
                        <a href='https://www.linkedin.com/in/aidan-lincoln/'>
                            <img src={require("../assets/linkedin-icon.png")} className="socialIcon" alt="linkedinIcon"></img>      
                        </a>
                    </li>   
                    <li className='socialsLI'>
                        <a href="mailto:aidantlincoln@gmail.com">
                            <img src={require("../assets/email-icon.png")} className="socialIcon" alt="emailIcon"></img>      
                        </a>
                    </li>   
                </ul>  
            </div>       
        </Anime>
    )
}