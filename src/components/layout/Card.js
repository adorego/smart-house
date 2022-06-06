import classes from "./Card.module.css";
const Card = (props) =>{
    
    return(
        <div className={classes.container} onClick={() => props.onClickHandler(props.room_name)}>
            <img src={props.image} alt="House Room" />
            <h6>{props.room_name}</h6>

        </div>
    )
    
}

export default Card;