import Navbar from './layout/Navbar';
import Sidebar from './layout/Sidebar';
import Footer from "./layout/Footer";
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <><div>
          <Navbar />

          <div className="d-flex">
            <Sidebar />

            <main className="flex-grow-1">
              <Outlet />
            </main>
          </div>
          <Footer />
      </div>
    </>
  );
}

export default App;