import {React, useState} from "react";
import "./topbar.css";
import { NotificationsNone, Language} from "@material-ui/icons";
import { useSelector } from 'react-redux';
import { Link} from 'react-router-dom'
import BadgeAvatars from "../BadgeAvatars";

export default function Topbar() {
  const user = useSelector(state=>state.user.currentUser)
const [isProfileOptionShowing, setIsProfileOptionShowing] = useState(false)
  
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Panel de Administracion</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          {/* <div className="topbarIconContainer">
            <Settings />
          </div> */}
          <button className="nav__toggle-btn-avatar" onClick={()=> setIsProfileOptionShowing(prev =>!prev)}>
            {/* si hay un usuario mostrar icono */}
            {
              user&&<BadgeAvatars/>
            } 
        </button>

        <ul className={`nav__links-profile ${isProfileOptionShowing ? 'show__nav-profile' : 'hide__nav-profile'}`}>
            <li>
              <Link 
                to={'/logout'} 
                onClick={()=> {setIsProfileOptionShowing( prev => !prev )       
                window.scroll({ top: -1800, left: 100, behavior: 'smooth' })
                }}
              >
                Cerrar sesion
              </Link>
            </li>
        </ul> 
        </div>
      </div>
    </div>
  );
}
