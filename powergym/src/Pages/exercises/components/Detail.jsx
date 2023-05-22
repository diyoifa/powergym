import React from 'react'
import { Typography, Stack, Button } from '@mui/material'

import BodyPartImage from '../assets/icons/body-part.png';
import TargetImage from '../assets/icons/target.png';
import EquipmentImage from '../assets/icons/equipment.png';

const Detail = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

  const extraDetail = [
    {
      icon: BodyPartImage,
      name: bodyPart,
    },
    {
      icon: TargetImage,
      name: target,
    },
    {
      icon: EquipmentImage,
      name: equipment,
    },
  ];

  return (
    <Stack 
      gap = '60px'
      sx={{
            flexDirection:{lg:'row', xs:'column'},
            p:'20px',
            alignItems:'center'
          }}
    >
      <img  src={gifUrl} alt={name} loading='lazy' className='detail-image'/>
       <Stack sx={{gap:{lg:'35px', xs:'20px'}}}  
       >
        <Typography variant='h3'>
          {name}
        </Typography>

        <Typography variant='h6'>
          El ejercicio te mantiene en forma.{''} {name} {''} es uno de los mejores
          mejores ejercicios para trabajar tus {target}. te ayudará a mejorar tu animo y ganar energia
        </Typography>
        {
          extraDetail.map(item=>(
            <Stack key={item.id} direction='row' alignItems='center'> 
              <Button
                sx={{
                      background:'var(--color-gray-200)', 
                      borderRadius:'50%',
                      width:'100px',
                      height:'100px'
                    }}
                
              >
                <img src={item.icon}  alt={item.name} 
                  style={{width:'50px', heigth:'50px', }}
                />
              </Button>
              <Typography variant='h6' textTransform='capitalize' marginLeft="1rem">
                  {item.name}
              </Typography>
            </Stack>
          ))
        }
       </Stack>   
    </Stack>
  )
}

export default Detail
