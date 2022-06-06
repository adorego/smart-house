import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classes from './PlusLessButton.module.css'
import { faMinus } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const PlusLessButton = (props) =>{
    return(
        <div className={classes.container} style={props.styles}>
            <FontAwesomeIcon className={classes.plusIcon} icon={faPlus} />
            <h6>{props.title}</h6>
            <FontAwesomeIcon className={classes.minusIcon} icon={faMinus} />
        </div>
    )
}

export default PlusLessButton;