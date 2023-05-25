import "./sidebar.css";
import {
  LineStyle,
  // Timeline,
  // TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  // BarChart,
  // MailOutline,
  // DynamicFeed,
  // ChatBubbleOutline,
  // WorkOutline,
  // Report,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Menu</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
            <li className="sidebarListItem active">
              <LineStyle className="sidebarIcon" />
              Inicio
            </li>
            </Link>
            {/* <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarListItem">
              <TrendingUp className="sidebarIcon" />
              Sales
            </li> */}
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Menu rapido</h3>
          <ul className="sidebarList">
            <Link to="/userlist" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                usuarios
              </li>
            </Link>
            <Link to="/productlist" className="link">
              <li className="sidebarListItem">
                <Storefront className="sidebarIcon" />
                productos
              </li>
            </Link>

            <Link to = "/transactionsList" className="link">
              <li className="sidebarListItem">
                <AttachMoney className="sidebarIcon" />
                transacciones
              </li>
            </Link>
            {/* <li className="sidebarListItem">
              <BarChart className="sidebarIcon" />
              Reports
            </li> */}
          </ul>
        </div>
        {/* <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <MailOutline className="sidebarIcon" />
              Mail
            </li>
            <li className="sidebarListItem">
              <DynamicFeed className="sidebarIcon" />
              Feedback
            </li>
            <li className="sidebarListItem">
              <ChatBubbleOutline className="sidebarIcon" />
              Messages
            </li>
          </ul>
        </div> */}
        {/* <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <WorkOutline className="sidebarIcon" />
              Manage
            </li>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarListItem">
              <Report className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div> */}
      </div>
    </div>
  );
}
