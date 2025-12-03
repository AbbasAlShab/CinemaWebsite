import { Link } from "react-router-dom";
import "../css/Navbar.css";
function NavBar(){
    return (
    < nav className="navbar">
        <div className="navbar-brand">
            <Link tp ="/">Movie App</Link>
        </div>
        <div className="navbar-links">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/favourites" className="nav-link">Favourites</Link>
            <Link to="/recommendation"className="nav-link">Recommendation</Link>
            <Link to="/about"className="nav-link">About</Link>
            <Link to="/contact"className="nav-link">Contact</Link>
        </div>
    </nav>
)}
export default NavBar