import classes from "./ChannelCard.module.css";
const ChannelCard = (props) =>{
    
    return(
        <div className={classes.container} onClick={() => props.onClickHandler({...props})}>
            <img src={props.image} alt="Channel" />
            <h6>{props.number}</h6>

        </div>
    )
    
}

export default ChannelCard;