import classes from './CircleButton.module.css';
const CircleButton = (props) =>{
    const dynamicClass = `${classes.container} ${props.class}`
    
    return(
        <div className={dynamicClass} style={props.styles} onClick={props.onClickHandler} >
            {props.children}

        </div>
    )
}

export default CircleButton;