import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import App from './App.jsx'
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Interests from "./pages/Interests.jsx";
import Error from "./pages/Error.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/Home",
        element: <Home />,
        errorElement: <Error />
      },
      {
        path: "/Contact",
        element: <Contact />,
        errorElement: <Error />
      },
      {
        path: "/About",
        element: <About />,
        errorElement: <Error />
      },
      {
        path: "/Interests",
        element: <Interests />, 
        errorElement: <Error />
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
