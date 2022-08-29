import logo from "../img/jordan.png";
import "./style.css";
import CartWidget from "../components/CartWidget"

const NavBar = () => {
    return (
        <nav className="nav">
            <div className="logo">
                <a href="#"><img src={logo} alt="logo"></img></a>
            </div>
            <div className="navItems">
                <ul>
                    <li>
                        <a href="#">Inicio</a>
                    </li>
                    <li>
                        <a href="#">SNKRS</a>
                    </li>
                    <li>
                        <a href="#">Nosotros</a>
                    </li>
                </ul>
            </div>
            <div className="login">
                <a href="#">Iniciar sesión</a>
                <CartWidget />
            </div>
        </nav>
    )
}

export default NavBar;