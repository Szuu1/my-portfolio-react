function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <a className="navbar-brand" href="#">Szuu1</a>

                <ul className="navbar-nav flex-row gap-4">
                    <li className="nav-item">
                        <a className="navbar-brand" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="navbar-brand" href="#">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="navbar-brand" href="#">Contact</a>
                    </li>
                    <li className="nav-item">
                        <a className="navbar-brand" href="#">Interests</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;