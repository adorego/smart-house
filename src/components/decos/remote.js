import CircleButton from '../ui/CircleButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Fragment} from 'react';
import NumberedButton from '../ui/NumberedButton';
import PlusLessButton from '../ui/PlusLessButton';
import TopPage from '../layout/TopPage';
import classes from './remote.module.css';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faVolumeMute } from '@fortawesome/free-solid-svg-icons';
import { useLocation } from 'react-router-dom';
import {useNavigate} from 'react-router-dom';

const Remote = () =>{
    const navigate = useNavigate();
    const location = useLocation();
    const room_name = location.state.room_name;
    
    const onClickStarHandler = () =>{
        navigate('/interactive',{
            state:{room_name:room_name}
          })
    }
    
    return (
        <Fragment>
        <TopPage styles={{width:"278px", margin:"auto"}} />
        <h5 className={classes.title_room_name}>Deco de</h5>
        {room_name && <h6 className={classes.room_name}>{room_name}</h6>}
        <div className={classes.container}>
            <CircleButton styles={{position:"absolute",top:"16px", right:"10%", backgroundColor:"#DD4040"}}>
                <FontAwesomeIcon style={{fontSize:"32px", color:"white", marginLeft:"20%", marginTop:"20%"}} icon={faPowerOff} />
            </CircleButton>
            <CircleButton styles={{position:"absolute",top:"56px", left:"39%", backgroundColor:"var(--primary-color)"}} onClickHandler={onClickStarHandler}>
                <FontAwesomeIcon style={{fontSize:"32px", color:"white", marginLeft:"20%", marginTop:"20%"}} icon={faStar} />
            </CircleButton>

            <CircleButton styles={{position:"absolute",top:"16px", left:"10%", backgroundColor:"var(--primary-color)"}}>
                <FontAwesomeIcon style={{fontSize:"32px", color:"white", marginLeft:"20%", marginTop:"20%"}} icon={faVolumeMute} />
            </CircleButton>
            <PlusLessButton styles={{position:"absolute",top:"120px", left:"5%"}} title="VOL" />
            <PlusLessButton styles={{position:"absolute",top:"120px", right:"5%"}} title="CH" />

            <NumberedButton number={1} styles={{position:"absolute",top:"336px", left:"5%"}} />
            <NumberedButton number={2} styles={{position:"absolute",top:"336px", left:"40%"}}/>
            <NumberedButton number={3} styles={{position:"absolute",top:"336px", right:"5%"}}/>
            <NumberedButton number={4} styles={{position:"absolute",top:"401px", left:"5%"}} />
            <NumberedButton number={5} styles={{position:"absolute",top:"401px", left:"40%"}}/>
            <NumberedButton number={6} styles={{position:"absolute",top:"401px", right:"5%"}}/>
            <NumberedButton number={7} styles={{position:"absolute",top:"466px", left:"5%"}} />
            <NumberedButton number={8} styles={{position:"absolute",top:"466px", left:"40%"}}/>
            <NumberedButton number={9} styles={{position:"absolute",top:"466px", right:"5%"}}/>
            <NumberedButton number={0} styles={{position:"absolute",top:"531px", left:"40%"}}/>
            
        </div>
        </Fragment>
    )
}

export default Remote;