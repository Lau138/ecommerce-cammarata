import logo from "../img/WEST.png";
import "./style.css";
import CartWidget from "../components/CartWidget"
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="nav">
            <div className="logo">
                <Link to="/">
                    <img src={logo} alt="logo"></img>
                </Link>
            </div>
            <div className="navItems">
                <ul>
                    <li>
                        <NavLink to="/productos/remeras">Remeras</NavLink>
                    </li>
                    <li>
                        <NavLink to="/productos/SNKRS">SNKRS</NavLink>
                    </li>
                    <li>
                        <NavLink to="/nosotros">Nosotros</NavLink>
                    </li>
                </ul>
            </div>
            <div className="login">
                <CartWidget />
            </div>
        </nav>
    )
}

export default NavBar;