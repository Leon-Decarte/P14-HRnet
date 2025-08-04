// 📄 Front/src/components/Navbar.jsx
import { Link } from "react-router-dom"
import "./Navbar.css"

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-title">
                <Link to="/">HRnet</Link>
            </div>
            <div className="navbar-links">
                <Link to="/">Create Employee</Link>
                <Link to="/employees">Employee List</Link>
            </div>
        </nav>
    )
}
