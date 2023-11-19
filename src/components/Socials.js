import Anime from 'react-anime';
import RhomboidButton from "./RhomboidButton";

export default function Socials(){
    return(
        <Anime>
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
                        <a>
                            <img src={require("../assets/email-icon.png")} className="socialIcon" alt="emailIcon"></img>      
                        </a>
                    </li>   
                </ul>  
            </div>       
        </Anime>
    )
}