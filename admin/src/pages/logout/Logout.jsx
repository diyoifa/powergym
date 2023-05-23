import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logoutSuccess} from '../../redux/userRedux';
import swal from 'sweetalert'
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
//   const user =
 useSelector(state => state.user); // Acceder al estado de Redux

  const handleLogout = (e) => {
    // console.log("Entre a handleLogout");
    //evitar evento por default para ejecutar los dispatch para cambiar estados
    e.preventDefault();
    dispatch(logoutSuccess()); // Llama a la acción logoutSuccess usando el dispatch
    swal("Buen trabajo!", "salida exitosa!", "success");
    navigate('/login')
  };

  return (
    <div
    style={{
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    }}
    >
        <button style={{ padding: 10, width:100 }} onClick={handleLogout}>Salir</button>
    
    </div>
  );
};

export default Logout;
