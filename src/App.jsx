import Navbar from './layout/Navbar';
import Sidebar from './layout/Sidebar';
import Sample from './Sample';
import Footer from "./layout/Footer";

function App() {
  return (
    <><div>
          <Navbar />

          <div className="d-flex">
            <Sidebar />

            <main className="flex-grow-1">
              <Sample />
            </main>
          </div>
          <Footer />
      </div>
    </>
  );
}

export default App;