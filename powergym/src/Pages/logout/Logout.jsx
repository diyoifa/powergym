import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logoutSuccess} from '../../redux/userRedux';
import swal from 'sweetalert'

const Logout = () => {
  const dispatch = useDispatch();
//   const user =
 useSelector(state => state.user); // Acceder al estado de Redux

  const handleLogout = (e) => {
    console.log("Entre a handleLogout");
    e.preventDefault();
    dispatch(logoutSuccess()); // Llama a la acción logoutSuccess usando el dispatch
    swal("Buen trabajo!", "salida exitosa!", "success");
  };

  return (
    <section>
      <button className='btn' onClick={handleLogout}>Salir</button>
    </section>
  );
};

export default Logout;
