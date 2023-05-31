import { DataGrid } from "@material-ui/data-grid";
import { convertirFechaHora } from "../../utils/convertirFechaHora";
import Pacman from "../../components/PacmanLoader";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";
import { privateRequest } from "../../requestMethods";
import {
  getOrdersStart,
  getOrdersSuccess,
  getOrdersFailure,
} from "../../redux/userRedux";
import './transactions.css'

const Transactions = () => {
  const dispatch = useDispatch();
  const [rows, setRows] = useState([]);
  const [order, setOrder] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getOrder = async () => {
      dispatch(getOrdersStart());
      setLoading(true);
      try {
        const res = await privateRequest.get(`/orders`);
        console.log("🚀 ~ file: User.jsx:70 ~ getOrder ~ res:", res);
        setOrder(res.data);
        dispatch(getOrdersSuccess());
        setLoading(false);
      } catch (error) {
        console.log("🚀 ~ file: User.jsx:74 ~ getOrder ~ error:", error);
        dispatch(getOrdersFailure());
        setLoading(false);
      }
    };
    getOrder();
  }, [dispatch]);

  useEffect(() => {
    const mappedRows = order.map((order) => ({
      amount: order.amount,
      createdAt: order.createdAt,
      status: order.status,
      id: order._id,
    }));
    setRows(mappedRows);
  }, [order]);

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 200,
    },

    {
      field: "amount",
      headerName: "Precio",
      width: 200,
    },

    {
      field: "createdAt",
      headerName: "Fecha",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            {convertirFechaHora(params.row.createdAt)}
          </div>
        );
      },
    },
    {
      field: "status",
      headerName: "Pay",
      with: 200,
    },
  ];

  return (
    <>
      {loading ? (
        <Pacman />
      ) : (
        <div className="userUpdate">
            {/* <h1 style={{marginBottom: "2rem", color: "limegreen"}}>Todas las transacciones</h1> */}
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
};

export default Transactions;
