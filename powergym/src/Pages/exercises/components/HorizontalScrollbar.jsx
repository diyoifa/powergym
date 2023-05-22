import React, { useContext} from 'react'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu'
import { Box, Typography } from '@mui/material'
import ExerciseCard from './ExerciseCard'
import BodyPart from './BodyPart';
import RightArrowIcon from '../assets/icons/right-arrow.png'
import LeftArrowIcon from '../assets/icons/left-arrow.png'
//import All from '../assets/icons/gym.png'
import All from '../assets/icons/logo.png'
import Back from '../assets/iconos2/icons8-músculos-de-la-espalda-64.png'
import Cardio from '../assets/iconos2/icons8-skipping-rope-64.png'
import Chest from '../assets/iconos2/icons8-pecho-64.png'
import LoweArms from '../assets/iconos2/icons8-elbow-64.png'
import LowerLegs from '../assets/iconos2/icons8-terneros-64.png'
import Neck from '../assets/iconos2/icons8-cuello-64.png'
import Shoulders from '../assets/iconos2/icons8-hombros-64.png'
import upperArms from '../assets/iconos2/icons8-bíceps-64.png'
import UpperLegs from '../assets/iconos2/icons8-cuadríceps-64.png'
import Waist from '../assets/iconos2/icons8-prelum-64.png'


const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);
  return (
    <Typography onClick={() => scrollPrev()} className="right-arrow">
      <img src={LeftArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);
  return (
    <Typography onClick={() => scrollNext()} className="left-arrow">
      <img src={RightArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

const HorizontalScrollbar = ({ data, bodyPart, setBodyPart,
  isBodyParts }) => {     

    const Icon = [All,Back,Cardio,Chest,LoweArms, LowerLegs,Neck,Shoulders,upperArms,UpperLegs,Waist]
      return(
          <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
            {
              data.map((item,index) =>
                <Box
                  key={item.id||item}
                  itemId = {item.id || item}
                  title ={item.id || item}
                  m = '0 20px'
                >
                  {isBodyParts ? <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart} Icon={Icon[index]} />
                  :<ExerciseCard exercise={item}/>}
                </Box>
                )
            }
        </ScrollMenu>
      )
}
export default HorizontalScrollbar;
