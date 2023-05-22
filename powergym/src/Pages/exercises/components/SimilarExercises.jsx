import React from 'react';
import { Typography, Box, Stack } from '@mui/material';

import HorizontalScrollbar from './HorizontalScrollbar';
import Loader from './Loader';

const SimilarExercises = ({ targetMuscleExercises, equipmentMuscleExercises }) => (
  <Box sx={{ mt: { lg: '1rem', xs: '0px' } }}>
    
    <Typography sx={{ fontSize: { lg: '35px', xs: '16px' }, ml: '20px' }} fontWeight={700} color="#000" mb="33px">
      Ejercicios para trabajar <span style={{ color: 'var(--color-secondary)', textTransform: 'capitalize' }}>musculos</span> similares
    </Typography>

    <Stack direction="row" sx={{ p: 2, position: 'relative' }}>
      {targetMuscleExercises.length? <HorizontalScrollbar data={targetMuscleExercises} /> : <Loader />}
    </Stack>

    <Typography sx={{ fontSize: { lg: '35px', xs: '16px' }, ml: '20px', mt: { lg: '100px', xs: '60px' } }} fontWeight={700} color="#000" mb="33px">
      Ejercicios similares con <span style={{ color: 'var(--color-secondary)', textTransform: 'capitalize' }}>otros equipos</span> 
    </Typography>

    <Stack direction="row" sx={{ p: 2, position: 'relative' }}>
      {equipmentMuscleExercises.length? <HorizontalScrollbar data={equipmentMuscleExercises} /> : <Loader />}
    </Stack>
    
  </Box>
);

export default SimilarExercises;
