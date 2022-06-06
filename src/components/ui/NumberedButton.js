import classes from './NumberedButton.module.css';

const NumberedButton = (props) =>{
    return(
        <div className={classes.container} style={props.styles}>
            <h4 className={classes.numberIcon}>{props.number}</h4>
        </div>
    )
}

export default NumberedButton;