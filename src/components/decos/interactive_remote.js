import ChannelCard from "../layout/ChannelCard";
import {Fragment} from 'react';
import TopPage from '../layout/TopPage';
import classes from './interactive_remote.module.css';
import useInput from '../../hooks/use-input';
import { useLocation } from 'react-router-dom';
import {useState} from "react";

const initialChannelList = [
    {
        number:1,
        name:"Tigo Star",
        image:"/images/channels/tigo_star.png"
    },
    {   
        number:2,
        name:"C9N",
        image:"/images/channels/c9n.png"
    },
    {
        number:3,
        name:"HD Paraguay",
        image:"/images/channels/hdPy.png"
    },
    {
        number:4,
        name:"Sur Televisora Itapua",
        image:"/images/channels/Itapua.png"
    },
    {   
        number:5,
        name:"Paravision",
        image:"/images/channels/paravision.png"
    },
    {
        number:6,
        name:"Red Guarani",
        image:"/images/channels/redGuarani.png"
    },
    {   
        number:7,
        name:"Telefuturo",
        image:"/images/channels/telefuturo.png"
    },
    {
        number:8,
        name:"Unicanal",
        image:"/images/channels/unicanal.png"
    }
]

const InteractiveRemote = (props) =>{
    const location = useLocation();
    const room_name = location.state.room_name;
    const [channelList, setChanelList] = useState(initialChannelList);
    

    const onChannelClick = () =>{
        console.log("On channel click");
    }

    const onSearchChannelChange = (e) =>{
       const value = e.target.value;
       if(value === ''){
           setSearchValue(value);
           setChanelList(initialChannelList);
       }else{
            setSearchValue(value); 
            channel_filter(value);
       }
       
       
    }

    const channel_filter = (searchValue) =>{
        setTimeout(
            () =>{
                    const resultList = channelList.filter((channel) => {
                    const result = channel.name.toLowerCase().includes(searchValue.toLowerCase());
                    return result;
               });
               setChanelList(resultList);
            },(200)
        )
        if(searchValue === ''){
            setChanelList(initialChannelList);
        }
        
    }

    const validateSearchValue = (value) =>{
        const empty = value === '';

        if(empty){
            return{
                pass:false,
                errorMessage:'Este valor no puede estar vacio'
            }
        }else{
            return{
                pass: true,
                errorMessage:''
            }
        }
    }

    const {value:searchValue,
        setValue:setSearchValue,
        onFocus:onSearchValueFocus
       } = useInput(validateSearchValue,"Canal?");

    // console.log("Channels list:", channelList);
    return (
        <Fragment>
        <TopPage styles={{width:"278px", margin:"auto"}} />
        <h5 className={classes.title_room_name}>Deco de</h5>
        {room_name && <h6 className={classes.room_name}>{room_name}</h6>}
        {/* <h6 className={classes.room_name}>Dormitorio de José</h6> */}
        <hr></hr>
        <div className={classes.container}>
            <h5 className={classes.inputLabel} htmlFor="searchInputId">Qué quieres ver ?</h5>
            <input className={`${classes.searchTextInput}`} 
                value={searchValue} 
                onFocus={onSearchValueFocus}
                onChange={onSearchChannelChange} />
            <div className={classes.channelListContainer}>
                {channelList.map(
                    (channel) =>{
                        return(
                            <ChannelCard key={channel.name} image={channel.image} number={channel.number} onClickHandler={onChannelClick}/>
                        )
                    }
                )}
            </div>
        </div>
        </Fragment>
    )
}
export default InteractiveRemote;