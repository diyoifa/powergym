import React from 'react'
import {Box, Stack, Typography } from '@mui/material'

const ExerciseVideos = ({ exerciseVideos, name }) => {
  
  return (
    <Box sx={{marginTop:{lg:'200px', xs:'20px'}}} p='20px'>
        
        <Typography variant='h4' mb='33px'>
          Mira <span style={{color:'var(--color-secondary)', textTransform:'capitalize'}}>{name}</span>  ejercicios para mirar como hacerlos
        </Typography>

        <Stack 
            justifyContent= 'flex-start' 
            flexWrap='wrap'
            alignItems='center'
            sx={
                {
                  flexDirection:{lg:'row', xs:'column'},
                  gap:{lg: '75px', xs:'0px'}
                }
            }
        >
          { //if true        //just take 0 from 3 elements  map them all
            exerciseVideos?.slice(0,3).map((item, index)=>
                <a 
                  key={index}
                  className= 'exercise-video'
                  href={`https://www.youtube.com/watch?v=${item.video.videoId}`} 
                  target = '_blank'
                  rel='noopener noreferrer'
                >
                  <Box 
                    textAlign='center'
                    p='5px'
                    color='var(--color-gray-100)'
                  > 

                    <img src={item.video.thumbnails[0].url} alt={item.video.title} 
                      style={{borderRadius:'10px', width:'80%', height:'70%'}}
                    />
                    <Box>
                      <Typography variant='h5' color='var(--color-secondary)'>
                        {item.video.title}
                      </Typography>
                      
                      <Typography variant='h5'>
                          {item.video.channelName}
                      </Typography>
                    </Box>
                    </Box>
                </a>
              )
          }

        </Stack>
    </Box>
  )
}

export default ExerciseVideos
