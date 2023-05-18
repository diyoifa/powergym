import React, { useEffect, useState } from 'react';
import { Box, Button, Stack, TextField} from '@mui/material';
import { exerciseOptions, fetchData } from '../utils/fetchData';
import HorizontalScrollbar from './HorizontalScrollbar';
import Header from "../../../Components/Header"
import HeaderImage from "../../../images/header_bg_2.jpg"
const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState('');
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);

      setBodyParts(['all', ...bodyPartsData]);
    };
    fetchExercisesData();
  }, []);

  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
      
      const searchedExercises = exercisesData.filter(
        (item) => item.name.toLowerCase().includes(search)
               || item.target.toLowerCase().includes(search)
               || item.equipment.toLowerCase().includes(search)
               || item.bodyPart.toLowerCase().includes(search),
      );

      window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
      setSearch('');
      setExercises(searchedExercises);
    }
  };

  return (
    <>
      <Header title = 'Nuestros Ejercicios 🏋️' image={HeaderImage}>
        En esta seccion puedes encontrar una amplia gama de ejercicios para que personalizes tus rutinas en POWERGYM
        puedes buscar por la barra de busqueda o por la barra de iconos dando click en el icono que representa el musculo que deseas trabajar
        una ves encuentres el ejercicio deseado puedes dar click en el y encontrar mayor informacion sobre el ejercicio asi como enlaces a videos de youtube 
        que te explican paso a paso como realizarlo de la mejor manera 💪
      </Header>
      <Stack  alignItems="center" mt="6rem" justifyContent="center" p="20px">
        {/* <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="49px" textAlign="center">
          Increibles ejercicios que <br /> Deberias conocer
        </Typography> */}
        <Box position="relative" mb="72px">
          <TextField
            height="76px"
            sx={{ input: { fontWeight: '700', border: 'none', borderRadius: '4px' }, width: { lg: '1170px', xs: '350px' }, backgroundColor: '#fff', borderRadius: '40px' }}
            value={search}
            onChange={(e) => setSearch(e.target.value.toLowerCase())}
            placeholder="Buscar ejercicios"
            type="text"
          />
          <Button className="btn search-btn" sx={{ bgcolor: 'var(--color-primary)', color: '#fff', textTransform: 'none', transition: "var(--transition)", width: { lg: '173px', xs: '80px' }, height: '56px', position: 'absolute', right: '0px', fontSize: { lg: '20px', xs: '14px' } }} onClick={handleSearch}>
            Bucar
          </Button>
        </Box>
        <Box sx={{ position: 'relative', width: '100%',  p: '20px' }}>
          <HorizontalScrollbar 
            data={bodyParts} 
            bodyPart={bodyPart} 
            setBodyPart={setBodyPart}
            isBodyParts 
          />
        </Box>
      </Stack>
    </>
  );
};

export default SearchExercises;
