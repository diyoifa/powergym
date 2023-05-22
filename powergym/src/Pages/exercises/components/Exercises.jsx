import React, {useEffect, useState} from 'react'
import Pagination from '@mui/material/Pagination';
import {Box, Stack, Typography} from '@mui/material'
import { exerciseOptions, fetchData } from '../utils/fetchData'
import ExerciseCard from './ExerciseCard'

const Exercises = ({exercises, setExercises, bodyPart}) => {
  const [currentPage, setCurrentPage] = useState(1);
  //every pages will have only 9 exercises shown
  const exercisesPerPage = 9;
  //we take the last
  const indesOfLastExercise = currentPage * exercisesPerPage
  //we take the firts
  const idexOfFirtExercise = indesOfLastExercise - exercisesPerPage
  //we take the current page
  const currentExercises = exercises.slice(idexOfFirtExercise, indesOfLastExercise)

  //onchange will exucute pagine
  const paginate = (event, value) => {
    //wii set a new value for the current page once it change
    setCurrentPage(value);
    window.scrollTo({ top: 1800, behavior: 'smooth' });
  }

  useEffect(() => {
    const  fetchExercisesData = async () =>{
      let exercisesData = []
      if (bodyPart === 'all') {
        exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
      } else {
        exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions);
      }
      setExercises(exercisesData);
    } 
    fetchExercisesData()
  }, [bodyPart, setExercises])
  
  return (
    <Box id='exercises'
      sx={{ mt:{lg:'100px'}}}
      mt='50px'
      p='10px'
    >
      <Typography className='card card-search' mb='46px' textAlign="center"> 
          <h2>RESULTADOS OBTENIDOS💪</h2>
      </Typography>

      <Stack 
        direction='row'
        sx={{gap: { lg:'3rem', xs:'50px'}}}
        flexWrap='wrap' 
        justifyContent='center'
        
      >
          {
            //we map every exercice to get a ExerciseCard component
            currentExercises.map((exercise, index)=>
              <ExerciseCard key={index} exercise={exercise}/>
            )
          }
      </Stack>

        <Stack 
        //at the button we add a pagination properti
        sx={{ mt: { lg: '114px', xs: '1100px' } }} 
        alignItems="center">

          {exercises.length > 9 && (
            <Pagination
            //pagination properties
              color="primary"
              shape="rounded"
              defaultPage={1}
              count={Math.ceil(exercises.length / exercisesPerPage)}
              page={currentPage}
              //we call paginate to upload
              onChange={paginate}
              size="large"
            />
          )}
        </Stack>
    </Box>
  )
}

export default Exercises
