import "./sidebar.css";
import React, { useState } from "react";
import {
  LineStyle,
  PermIdentity,
  Storefront,
  AttachMoney,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [activeItem, setActiveItem] = useState(0);

  const handleItemClick = (index) => {
    setActiveItem(index);
  };

  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Menu</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
              <li
                className={`sidebarListItem ${activeItem === 0 ? "active" : ""}`}
                onClick={() => handleItemClick(0)}
              >
                <LineStyle className="sidebarIcon" />
                Inicio
              </li>
            </Link>
            {/* Resto de los elementos de la lista */}
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Menu rápido</h3>
          <ul className="sidebarList">
            <Link to="/userlist" className="link">
              <li
                className={`sidebarListItem ${activeItem === 1 ? "active" : ""}`}
                onClick={() => handleItemClick(1)}
              >
                <PermIdentity />
                Usuarios
              </li>
            </Link>
            <Link to="/productslist" className="link">
              <li
                className={`sidebarListItem ${activeItem === 2 ? "active" : ""}`}
                onClick={() => handleItemClick(2)}
              >
                <Storefront className="sidebarIcon" />
                Productos
              </li>
            </Link>

            <Link to="/transactionsList" className="link">
              <li
                className={`sidebarListItem ${activeItem === 3 ? "active" : ""}`}
                onClick={() => handleItemClick(3)}
              >
                <AttachMoney className="sidebarIcon" />
                Transacciones
              </li>
            </Link>
            {/* Resto de los elementos de la lista */}
          </ul>
        </div>
      </div>
    </div>
  );
}
