import React from 'react'
import  { useState } from 'react';
import { Box } from '@mui/material';
import Exercises from './components/Exercises';
import SearchExercises from './components/SearchExercises';
//import HeroBanner from './components/HeroBanner';
import './Ejercicio.css'

const Ejercisios = () => {
  const [bodyPart, setBodyPart] = useState('all')
  const[exercises, setExercises] = useState([])

  return (
    <Box>
      {/* <HeroBanner/> */}
      <SearchExercises 
        bodyPart = {bodyPart}
        setBodyPart = {setBodyPart}
        setExercises = {setExercises}
      />
      
      <Exercises 
        exercises = {exercises}
        setExercises = {setExercises}
        bodyPart = {bodyPart}
      />
      
    </Box>
  )
}

export default Ejercisios
