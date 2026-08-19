import {Link} from 'react-router-dom';
function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <Link className="navbar-brand" to="/Home">Szuu1</Link>

                <ul className="navbar-nav flex-row gap-4">
                    <li className="nav-item">
                        <Link className="navbar-brand" to="/Home">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="navbar-brand" to="/About">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="navbar-brand" to="/Contact">Contact</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="navbar-brand" to="/Interests">Interests</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;