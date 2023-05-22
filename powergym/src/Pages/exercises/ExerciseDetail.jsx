import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import { exerciseOptions, fetchData, youtubeOptions} from './utils/fetchData';
import Detail from './components/Detail';
import ExerciseVideos from './components/ExerciseVideos';
import SimilarExercises from './components/SimilarExercises';
import Pacman from '../../Components/PacmanLoader';

const ExerciseDetail = () => {
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [equipmentMuscleExercises, setEquipmentMuscleExercises] = useState([]);
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const { id } = useParams(); //toma el id de  los params
  const [loading, setLoading] = useState(false)

  useEffect(() => {
   window.scrollTo({ top: 0, behavior: 'smooth' });
   setLoading(true)

    const fetchExercisesData = async () => {
      const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
      const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';

      const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions);
      setExerciseDetail(exerciseDetailData);

      const exerciseVideosData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`, youtubeOptions);
      setExerciseVideos(exerciseVideosData.contents);
      
      const targetMuscleExerciseData = await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`, exerciseOptions);
      setTargetMuscleExercises(targetMuscleExerciseData);

      const equipmentMuscleExerciseData = await fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`, exerciseOptions);
      setEquipmentMuscleExercises(equipmentMuscleExerciseData);
      setLoading(false)
    };

    fetchExercisesData();
  }, [id]);


  return (
    <>
      {
        loading
        ?(<Pacman/>)
        :(
          <Box sx={{ mt: { lg: '120px', xs: '80px' } }}>
          <Detail exerciseDetail={exerciseDetail} />
          <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name} />
          <SimilarExercises targetMuscleExercises= {targetMuscleExercises} equipmentMuscleExercises={equipmentMuscleExercises} />
        </Box>
        )
      }
      
    </>
  );
};

export default ExerciseDetail;
