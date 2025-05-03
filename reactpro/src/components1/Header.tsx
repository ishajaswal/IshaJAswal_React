import { Link } from "react-router-dom"
import "../assets/NewCss/Header.css"

const Header = () => (
    <header className="header">
       <div className="header-left">Demo</div>
       <div className="header-right">
        <Link to="/login" className = "header-link">Login
        </Link>
        <Link to="/register" className="header-link">
        Register
        </Link>
       </div>
    </header> 
);

export default Header;