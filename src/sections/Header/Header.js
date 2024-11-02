import { Link , NavLink  } from 'react-router-dom'

import './Header.css'
import logo from "../../assets/images/logo.png"
import NavItem,{NavItemDropDown} from '../../Components/NavItem/NavItem'



const Header =()=>{
    return(
    <div className="navbar navbar-expand-md navbar-dark cyborg-navbar">
        <div className="container">
            <Link to="/" className="navbar-brand">
                <img src={logo} alt='logo'></img>
            </Link>
            <button className="navbar-toggler" name='navbar-toggler' type="button" data-bs-toggle="collapse" data-bs-target="#mainmenu">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="mainmenu">
                <ul className="navbar-nav ms-auto">
                    <NavItem>
                        <NavLink  to="/home" activeclassname="active" className="nav-link">Home</NavLink>
                    </NavItem>
                    
                    <NavItem>
                        <NavLink to="/Browse" activeclassname="active" className="nav-link">Browse</NavLink>
                    </NavItem>
                    
                    <NavItemDropDown>
                        <Link to="/#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Details</Link>
                        <ul className="dropdown-menu">
                            <li><NavLink to="/Details"  className="dropdown-item">Fortnite</NavLink></li>
                            <li><NavLink to="/#" className="dropdown-item">Valorant</NavLink></li>
                        </ul>
                    </NavItemDropDown>
                    
                    <NavItem>
                        <NavLink to="/ContactUs" activeclassname="active" className="nav-link">Contact Us</NavLink>
                    </NavItem> 
                    
                </ul>
            </div>
        </div>
    </div>
    )
}
export default Header