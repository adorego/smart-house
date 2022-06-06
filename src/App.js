import './App.css';

import Card from './components/layout/Card';
import Header from './components/layout/Header';
import React from 'react';
import classes from './app.module.css';
import {useNavigate} from 'react-router-dom';

const decos = [
  {
    id:1,
    image:"/images/living_room.png",
    room_name:"Sala"
  },
  {
    id:2,
    image:"/images/bed_room.png",
    room_name:"Dormitorio Ana"
  },
  {
    id:3,
    image:"/images/bed_room.png",
    room_name:"Dormitorio Andy"
  },
  {
    id:4,
    image:"/images/bed_room.png",
    room_name:"Dormitorio Oscar"
  },
  {
    id:5,
    image:"/images/quincho.jpeg",
    room_name:"Quincho"
  },
  {
    id:6,
    image:"/images/estar_casa.jpeg",
    room_name:"Estar"
  }

];

const portones = [
  {
    id:1,
    image:"/images/porton.png",
    room_name:"Principal"
  },
  {
    id:2,
    image:"/images/porton.png",
    room_name:"Lateral"
  } ];

function App() {
  const navigate = useNavigate();
  const onRoomClick = (room_name) =>{
    console.log(room_name);
    navigate('/remote',{
      state:{room_name:room_name}
    })

  }
  return (
    <div className={classes.container}>
      <Header />
      <div className={classes.main}>
        <div className={classes.decos}>
          <h4 className={classes.sectionTitle}>{"Decos Tigo Start"}</h4>
          <div className={classes.cardList} >
            {decos.map(
              (deco) =>{
                return(
                  <Card key={deco.id} image={deco.image} room_name={deco.room_name} onClickHandler={onRoomClick}/>
                )
              }
            )}
          </div>
        </div>
        <div className={classes.porton}>
          <h4 className={classes.sectionTitle}>{"Portón"}</h4>
          <div className={classes.cardList} >
            {portones.map(
              (porton) =>{
                return(
                  <Card key={porton.id} image={porton.image} room_name={porton.room_name} onClickHandler={onRoomClick}/>
                )
              }
            )}
          </div>
        </div>
        <div className={classes.luces}>
        <h4 className={classes.sectionTitle}>{"Luces"}</h4>
          <div className={classes.cardList} >
            {decos.map(
              (deco) =>{
                return(
                  <Card key={deco.id} image={deco.image} room_name={deco.room_name} onClickHandler={onRoomClick}/>
                )
              }
            )}
          </div>
        </div>
        <div className={classes.temperatura}>
        <h4 className={classes.sectionTitle}>{"Temperatura"}</h4>
          <div className={classes.cardList} >
            {decos.map(
              (deco) =>{
                return(
                  <Card key={deco.id} image={deco.image} room_name={deco.room_name} onClickHandler={onRoomClick}/>
                )
              }
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
