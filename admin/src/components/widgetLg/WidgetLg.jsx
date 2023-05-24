import { useEffect, useState } from "react";
import { privateRequest } from "../../requestMethods";
import "./widgetLg.css";
// import {format} from "timeago.js"
import { format } from "timeago.js";
import Pacman from "../PacmanLoader";
// import { BarLoader } from "react-spinners";

export default function WidgetLg() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const getOrders = async () => {
      try {
        const res = await privateRequest.get("/orders/?new=true");
        setOrders(res.data);
        setLoading(false);
      } catch {}
    };
    getOrders();
  }, []);
  console.log("🚀 ~ file: WidgetLg.jsx:11 ~ WidgetLg ~ orders:", orders)

  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  console.log(orders);
  return (
    <div className="widgetLg">
      {loading ? (
        <Pacman/>
      ) : (
        <>
          <h3 className="widgetLgTitle">Todas las transacciones </h3>
          <table className="widgetLgTable">
            <tr className="widgetLgTr">
              <th className="widgetLgTh">Cliente</th>
              <th className="widgetLgTh">Fecha</th>
              <th className="widgetLgTh">Total</th>
              <th className="widgetLgTh"></th>
            </tr>
            {orders.map((order) => (
              <tr className="widgetLgTr" key={order._id}>
                <td className="widgetLgUser">
                  <span className="widgetLgName">{order.userId}</span>
                </td>
                <td className="widgetLgDate">{format(order.createdAt)}</td>
                <td className="widgetLgAmount">${order.amount}</td>
                <td className="widgetLgStatus">
                  <Button type={order.status} />
                </td>
              </tr>
            ))}
          </table>
        </>
      )}
    </div>
  );
}
