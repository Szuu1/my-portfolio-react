function Sidebar() {
    return (
        <div className="bg-dark text-white p-3" style={{ width: '250px', height: '100vh' }}>
            <h3>Sidebar</h3>
            <ul className="nav flex-column">
                <li className="nav-item">
                    <a className="nav-link text-white" href="#">Dashboard</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-white" href="#">Profile</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-white" href="#">Logout</a>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar;
