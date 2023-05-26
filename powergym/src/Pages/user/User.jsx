import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@material-ui/icons";
import {
  //Link,
  useLocation,
  //useNavigate,
} from "react-router-dom";
import { privateRequest } from "../../requestMethods";
import "./user.css";
import { useEffect } from "react";
import { useState } from "react";
import {
  useDispatch,
  //  useSelector
} from "react-redux";
import { updateUser } from "../../redux/apiCalls";
// import{
//   getUserStar,
//   getUserSuccess,
//   getUserFailure
// } from '../../redux/userRedux.js'
// import { format } from "timeago.js";
// import { DeleteOutline } from "@material-ui/icons";
// import { Link } from "react-router-dom";
// import { DataGrid } from "@material-ui/data-grid";
// import PriceCheckIcon from "@mui/icons-material/PriceCheck";
// import { updateOrder, deleteOrder } from "../../redux/apiCalls";
// import { updateUser } from "../../redux/apiCalls";
// import Pacman from "../../components/PacmanLoader";
import { convertirFechaHora } from "../../utils/convertirFechaHora";
// import { deleteUser } from "../../redux/apiCalls";
import app from "../../firebase";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import swal from "sweetalert";

export default function User() {
  // const id = useParams()
  const location = useLocation();
  //  console.log("🚀 ~ file: User.jsx:15 ~ User ~ location:", location)
  const id = location.pathname.split("/")[2];
  // console.log("🚀 ~ file: User.jsx:17 ~ User ~ id:", id)
  // const user = useSelector(state=>state.user.currentUser)
  // console.log("🚀 ~ file: User.jsx:42 ~ User ~ user:", user)
  // console.log("🚀 ~ file: User.jsx:42 ~ User ~ user._id:", user._id)
  const [file, setFile] = useState(null);
  const [user, setUser] = useState({});
  const [inputs, setInputs] = useState({});
  const [progres, setProgres] = useState("")
  const dispatch = useDispatch();

  /*
  // const [order, setOrder] = useState([]);
  // const [rows, setRows] = useState([]);
  // const [loading, setLoading] = useState(false);

  // const navigate = useNavigate()
  // const convertirFechaHora = (createdAt) => {
  //   const fechaHora = new Date(createdAt);
  //   const opciones = {
  //     year: "numeric",
  //     month: "2-digit",
  //     day: "2-digit",
  //   };
  //   return fechaHora.toLocaleString(undefined, opciones);
  // }
*/
  useEffect(() => {
    const getUser = async () => {
      // dispatch(getUserStar())
      try {
        const res = await privateRequest.get(`/users/find/${id}`);
        console.log("🚀 ~ file: User.jsx:26 ~ getUser ~ res:", res.data);
        setUser(res.data);
        //por defecto la imagen actual
        // setFile(res.data.img)
        // dispatch(getUserSuccess(res.data))
      } catch (error) {
        console.log("🚀 ~ file: User.jsx:26 ~ getUser ~ error:", error);
        //  dispatch(getUserFailure())
      }
    };
    getUser();
  }, [id]);

  //console.log("🚀 ~ file: User.jsx:95 ~ User ~ file:", file)

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  // console.log(inputs)

  const handleClickImg = (e) => {
     e.preventDefault()
    if (file === null) {
      swal("Lo siento!", "debes dar click en el icono upload y seleccionar una foto!🥴", "error");
      return;
    }

    // ====================CARGAR LA IMAGEN LOCAL AL FIRABASE=======================
    const fileName = new Date().getTime() + file.name;
    // console.log("🚀 ~ file: Register.jsx:24 ~ handleClick ~ fileName:", fileName)
    const storage = getStorage(app);
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);
    // Register three observers:
    // 1. 'state_changed' observer, called any time the state changes
    // 2. Error observer, called on failure
    // 3. Completion observer, called on successful completion
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
         setProgres(`🔃${progress.toFixed(2)} %🆗✔️ `)
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
        }
      },
      (error) => {
        // Handle unsuccessful uploads
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          // ====================CARGAR LA IMAGEN LOCAL AL FIRABASE=======================
          updateUser(user._id, { img: downloadURL }, dispatch);
        });
      }
    );
  };

  const handleClick = (e) => {
    //  e.preventDefault()
    updateUser(user._id, inputs, dispatch);
  };

  const { username, img, email, phone, fullname, address, createdAt } = user;

  /**
   *

  // const handleDelete = (id) => {
  //   deleteOrder(id, dispatch);
  //   window.location.reload(); //refresque la pagina como lo haria un boton
  // };

  // const handleUpdateOrder = (id) => {
  //   updateOrder(id, { status: "Pagado" }, dispatch);
  //   window.location.reload();
  // }

  //  const handleDeleteUser = () => {
  //     // setData(data.filter((item) => item.id !== id));
  //      deleteUser(id, dispatch);
  //      console.log(id)
  //      navigate('/userlist')
  //     // window.location.reload();
  //   };

  // useEffect(() => {
  //   const getOrder = async () => {
  //     dispatch(getOrderStart());
  //     setLoading(true);
  //     try {
  //       const res = await privateRequest.get(`/orders/${id}`);
  //       console.log("🚀 ~ file: User.jsx:70 ~ getOrder ~ res:", res);
  //       setOrder(res.data);
  //       dispatch(getOrderSuccess());
  //       setLoading(false);
  //     } catch (error) {
  //       console.log("🚀 ~ file: User.jsx:74 ~ getOrder ~ error:", error);
  //       dispatch(getOrderFailure());
  //       setLoading(false);
  //     }
  //   };
  //   getOrder();
  // }, [id, dispatch]);

  // useEffect(() => {
  //   const mappedRows = order.map((order) => ({
  //     amount: order.amount,
  //     createdAt: order.createdAt,
  //     status: order.status,
  //     id: order._id,
  //   }));
  //   setRows(mappedRows);
  // }, [order]);

  // const columns = [
  //   {
  //     field: "id",
  //     headerName: "ID",
  //     width: 90,
  //   },

  //   {
  //     field: "amount",
  //     headerName: "Precio",
  //     width: 114,
  //   },

  //   {
  //     field: "createdAt",
  //     headerName: "Fecha",
  //     width: 120,
  //     renderCell: (params) => {
  //       return (
  //         <div className="userListUser">
  //           {convertirFechaHora(params.row.createdAt)}
  //         </div>
  //       );
  //     },
  //   },
  //   {
  //     field: "status",
  //     headerName: "Pay",
  //     with: 110,
  //   },
  //   {
  //     field: "action",
  //     headerName: "Accion",
  //     width: 150,
  //     renderCell: (params) => {
  //       return (
  //         <>
  //           <PriceCheckIcon
  //             className="userListAprove"
  //             onClick={() => handleUpdateOrder(params.row.id)}
  //           />
  //           <DeleteOutline
  //             className="userListDelete"
  //             onClick={() => handleDelete(params.row.id)}
  //           />
  //         </>
  //       );
  //     },
  //   },
  // ];
*/
  return (
    <>
      <div className="user">
        <div className="userContainer">
          <div className="userShow">
            <div className="userShowTop">
              <img src={img} alt={username} className="userShowImg" />
              <div className="userShowTopTitle">
                <span className="userShowUsername">{fullname}</span>
              </div>
            </div>
            <div className="userShowBottom">
              <span className="userShowTitle">Detalles de la cuenta</span>
              <div className="userShowInfo">
                <PermIdentity className="userShowIcon" />
                <span className="userShowInfoTitle">{username}</span>
              </div>
              <div className="userShowInfo">
                <CalendarToday className="userShowIcon" />
                <span className="userShowInfoTitle">
                  {convertirFechaHora(createdAt)}
                </span>
              </div>
              <span className="userShowTitle">Contacto</span>
              <div className="userShowInfo">
                <PhoneAndroid className="userShowIcon" />
                <span className="userShowInfoTitle">{phone}</span>
              </div>
              <div className="userShowInfo">
                <MailOutline className="userShowIcon" />
                <span className="userShowInfoTitle">{email}</span>
              </div>
              <div className="userShowInfo">
                <LocationSearching className="userShowIcon" />
                <span className="userShowInfoTitle">{address}</span>
              </div>
              {/* <div className="userShowInfo">
                  <DeleteOutline className="userListDelete" onClick={handleDeleteUser}/>
                  <span className="userShowInfoTitle">eliminar usuario</span>
                </div> */}
            </div>
          </div>

          <div className="userUpdate">
            <span className="userUpdateTitle">Editar</span>
            <form className="userUpdateForm">
              <div className="userUpdateLeft">
                <div className="userUpdateItem">
                  <label>Nombre de usuario</label>
                  <input
                    name="username"
                    type="text"
                    placeholder="diyoifa"
                    className="userUpdateInput"
                    onChange={handleChange}
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Nombre completo</label>
                  <input
                    name="fullname"
                    type="text"
                    placeholder="gregorio cardona"
                    className="userUpdateInput"
                    onChange={handleChange}
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Correo</label>
                  <input
                    name="email"
                    type="text"
                    placeholder="greg@gmail.com"
                    className="userUpdateInput"
                    onChange={handleChange}
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Telefono</label>
                  <input
                    name="phone"
                    type="text"
                    placeholder="3114811794"
                    className="userUpdateInput"
                    onChange={handleChange}
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Direccion</label>
                  <input
                    name="address"
                    type="text"
                    placeholder="San antonio | Venezuela"
                    className="userUpdateInput"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="userUpdateRight">
                <div className="userUpdateUpload">
                  <img className="userUpdateImg" src={img} alt={username} />
                  <label htmlFor="file">
                    <Publish className="userUpdateIcon" />
                  </label>
                  <input
                    type="file"
                    id="file"
                    style={{ display: "none" }}
                    onChange={(e) => setFile(e.target.files[0])}
                  />
                </div>
                <div className="userUpdateBtns">
                  <button className="btn" onClick={handleClick}>
                    Datos
                  </button>
                  <button className="btn" onClick={handleClickImg}>
                    Foto
                  </button>
                  <span>{progres}</span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
