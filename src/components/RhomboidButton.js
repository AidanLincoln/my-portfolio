import {Link} from 'react-router-dom'
export default function RhomboidButton(props){
    //props:
    //action (onclick)
    //text (button text)
    //route 
    return(
        <button className="rhomboidBtn" onClick={props.action}>
            <Link to={props.route} className="rhomboidBtnText">{props.text}</Link>
        </button>
    );
}