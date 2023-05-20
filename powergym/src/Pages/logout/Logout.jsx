import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logoutSuccess} from '../../redux/userRedux';
import { resetCart} from '../../redux/cartRedux';
import swal from 'sweetalert'

const Logout = () => {
  const dispatch = useDispatch();
//   const user =
 useSelector(state => state.user); // Acceder al estado de Redux

  const handleLogout = (e) => {
    // console.log("Entre a handleLogout");
    //evitar evento por default para ejecutar los dispatch para cambiar estados
    e.preventDefault();
    dispatch(logoutSuccess()); // Llama a la acción logoutSuccess usando el dispatch
    dispatch(resetCart())
    swal("Buen trabajo!", "salida exitosa!", "success");
  };

  return (
    <section className='section__head'>
      <button className='btn logout-btn' onClick={handleLogout}>Salir</button>
    </section>
  );
};

export default Logout;
