import "./userList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
//import { userRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getUsers, deleteUser } from "../../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";
// import { format } from "timeago.js";
import Pacman from "../../components/PacmanLoader";
import { convertirFechaHora } from "../../utils/convertirFechaHora";
// import {
//   getUsersStart, 
//   // getUsersSuccess,
//   getUsersFailure, 
// }from '../../redux/userRedux'
// import { privateRequest } from "../../requestMethods";


export default function UserList() {

  const users = useSelector((state) => state.user.users);
  console.log(users);
  const dispatch = useDispatch();
  const [rows, setRows] = useState([]);
  // const [users, setUsers] = useState([])
  //const [transactions, setTransactions] = useState()
  const [loading, setLoading] = useState(false);

  const handleDelete = (id) => {
     deleteUser(id, dispatch);
     console.log(id)
    window.location.reload();
  };

  // useEffect(()=>{
  //   const getUsers = async ()=>{
  //     dispatch(getUsersStart());
  //     setLoading(true)
  //     try {
  //       const res = await privateRequest.get('/users')
  //       //dispatch(getUsersSuccess(res.data))
  //       setUsers(res.data)
  //       setLoading(false)
  //     } catch (error) {
  //       dispatch(getUsersFailure())
  //     }
  //   }
  //   getUsers()
  // },[dispatch])

  useEffect(() => {
    setLoading(true)
    getUsers(dispatch)
    setLoading(false)
  }, [dispatch])

  useEffect(() => {
    const mappedRows = users.map((user) => ({
      id: user._id,
      username: user.username,
      email: user.email,
      createdAt: user.createdAt,
      img: user.img,
    }));
    setRows(mappedRows)
  }, [users])

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "user",
      headerName: "Usuario",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img className="userListImg" src={params.row.img} alt="" />
            {params.row.username}
          </div>
        );
      },
    },
    {
      field: "email",
      headerName: "Email",
      width: 200,
    },

    {
      field: "createdAt",
      headerName: "Fecha",
      width: 160,
      renderCell: (params) => {
        return (
          <div className="userListUser">{convertirFechaHora(params.row.createdAt)}</div>
        );
      },
    },
    {
      field: "action",
      headerName: "Accion",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/user/" + params.row.id}>
              <button className="userListEdit">Ver</button>
            </Link>
            <DeleteOutline
              className="userListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <>
      {loading ? (
        <Pacman />
      ) : (
        <div className="userList">
          <DataGrid
            rows={rows}
            disableSelectionOnClick
            columns={columns}
            pageSize={8}
            checkboxSelection
          />
        </div>
      )}
    </>
  );
}
