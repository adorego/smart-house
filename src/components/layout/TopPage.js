import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classes from './TopPage.module.css';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import {useNavigate} from 'react-router-dom';

const TopPage = (props) =>{
    const navigate = useNavigate()
    
    const onReturnHandler = () =>{
        navigate(-1);
    }


    return(
        <div className={classes.container} style={props.styles}>
            <FontAwesomeIcon icon={faAngleLeft} onClick={onReturnHandler} className={classes.returnIcon}/>
        </div>
    )
}

export default TopPage;