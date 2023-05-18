import React from 'react'
import {Stack, Typography} from '@mui/material'
//import Icon from '../assets/icons/gym.png'

const BodyPart = ({item, setBodyPart, bodyPart, Icon}) => {
  return (
    <Stack 
        type='button' 
        alignItems='center'
        justifyContent='center'
        className='bodyPart-card'
        sx={{
                borderTop: bodyPart === item ? '4px solid var(--color-primary)' : '4px solid var(--color-secondary)',
                backgroundColor:'var(--color-gray-200)',
                borderBottomLeftRadius:'20px',
                width:'180px', 
                height:'200px',
                cursor:'pointer',
                
        }}
        onClick={() => {
             setBodyPart(item)
             window.scroll({top: 1800, left:100, behavior: 'smooth'})
            }
        }
    >
        <img src={Icon} alt={Icon} style={{width:'60px', height:'70px'}}/>

        <Typography fontSize='20px' 
            fontWeight ='bold'
            color='#3A1212'
            textTransform='capitalize'
        >
            {item}
        </Typography>

    </Stack>
  )
}

export default BodyPart
