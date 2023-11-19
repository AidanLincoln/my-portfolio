export default function RhomboidButton(props){
    //props:
    //action (onclick)
    //text (button text)
    return(
        <button className="rhomboidBtn" onClick={props.action}>
            <div className="rhomboidBtnText">{props.text}</div>
        </button>
    );
}