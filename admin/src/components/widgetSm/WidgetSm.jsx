import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";
import { useEffect, useState } from "react";
// import { privateRequest } from "../../requestMethods";
import Pacman from "../PacmanLoader";
import {Link} from 'react-router-dom'
import {getUsers} from '../../redux/apiCalls'
import { useDispatch, useSelector } from "react-redux";


export default function WidgetSm() {
  // const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch()
  const users = useSelector(state=>state.user.users)
  const lastUsers =  users.slice(-3).sort((a,b)=> b - a) //ultimos 5 del array y ordenados de mayor a menor

  useEffect(() => {
    setLoading(true);
    getUsers(dispatch)
    //se ejecutara ya sea si se resuelve la promesa o no
    .finally(() => setLoading(false));
  }, [dispatch]);
  

  return (
    <div className="widgetSm">
      {loading ? (
        <Pacman />
      ) : (
        <>
          <span className="widgetSmTitle">Nuevos usuarios</span>
          <ul className="widgetSmList">
            {lastUsers.map((user) => (
              <li className="widgetSmListItem" key={user._id}>
                <img
                  src={
                    user.img ||
                    "https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif"
                  }
                  alt=""
                  className="widgetSmImg"
                />
                <div className="widgetSmUser">
                  <span className="widgetSmUsername">{user.username}</span>
                </div>
                <Link to={`/user/${user._id}`}>
                  <button className="widgetSmButton">
                    <Visibility className="widgetSmIcon" />
                    Ver
                  </button>
                </Link>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
