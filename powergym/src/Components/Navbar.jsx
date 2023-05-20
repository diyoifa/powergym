import React,{useState} from 'react'
import './Navbar.css'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../images/logo.png'
import {links} from '../data'
import {FaBars} from 'react-icons/fa'
import {MdOutlineClose} from 'react-icons/md'
import { Badge } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import {useSelector} from 'react-redux'
import BadgeAvatars from './BadgeAvatars'
//  import {logoutSuccess} from '../redux/userRedux'

const Navbar = () => {
const [isNavShowing,setIsNavShowing] = useState(false)
const [isProfileOptionShowing, setIsProfileOptionShowing] = useState(false)
const quantity = useSelector(state => state.cart.quantity)
const user = useSelector(state => state.user)
// const dispatch = useDispatch()

// const handleLogout = (e)=>{
//   console.log("entre a handleLogout")
//   e.preventDefault()
//   logoutSuccess(dispatch)
// }
return (
    <div className='nav'>
      <div className='container nav__container'>
        <Link to= '/' className='logo' onClick={()=>{setIsNavShowing(!isNavShowing) 
          window.scroll({ top: -1800, left: 100, behavior: 'smooth' })}}
          >
            <img src={Logo} alt='Nav Logo'/>
        </Link>
        <ul className={`nav__links ${isNavShowing ? 'show__nav' : 'hide__nav'}`}>
            {
               links.map(({name, path, property}, index)=>{ 
                return(
                    <li key={index}>
                        <NavLink to={path} className = {({isActive})=> 
                        isActive 
                        ? 'active-nav'
                        : ''}
                        onClick={()=> {setIsNavShowing( prev => !prev )
                        window.scroll({ top: -1800, left: 100, behavior: 'smooth' })
                        }}
                        target={property}
                        >
                            {name}
                        </NavLink>
                    </li>
                  )  
                }
               ) 
            }
            <li>
                <NavLink to = '/cart' className = {({isActive})=> 
                        isActive 
                        ? 'active-nav'
                        : ''} 
                        // style={{textDecoration: "none"}}
                        onClick={()=> {setIsNavShowing( prev => !prev )
                          window.scroll({ top: -1800, left: 100, behavior: 'smooth' })
                          }}
                >  
                  <Badge 
                    badgeContent = {quantity}
                    color = "primary"
                  >
                      <ShoppingCartOutlinedIcon/>
                  </Badge>
                </NavLink>
            </li>                   
        </ul>
        <button className="nav__toggle-btn" onClick={()=> setIsNavShowing(prev=>!prev)}>
                { 
                      isNavShowing ? <MdOutlineClose/> : <FaBars/>
                }
        </button>

        <button className="nav__toggle-btn-avatar" onClick={()=> setIsProfileOptionShowing(prev =>!prev)}>
            {/* si hay un usuario mostrar icono */}
            {
              user.currentUser&&<BadgeAvatars/>
            } 
        </button>

        <ul className={`nav__links-profile ${isProfileOptionShowing ? 'show__nav-profile' : 'hide__nav-profile'}`}>
            <li>
              <NavLink 
                to={'/'} 
                onClick={()=> {setIsProfileOptionShowing( prev => !prev )
                window.scroll({ top: -1800, left: 100, behavior: 'smooth' })
                }}
              >
                mis compras
              </NavLink>
            </li>
            <li>
              <NavLink 
                to={'/logout'} 
                onClick={()=> {setIsProfileOptionShowing( prev => !prev )       
                window.scroll({ top: -1800, left: 100, behavior: 'smooth' })
                }}
              >
                Cerrar sesion
              </NavLink>
            </li>
        </ul> 
      </div>
    </div>
  )
}

export default Navbar
