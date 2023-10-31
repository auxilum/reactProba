import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Popis_filmova from './components/Popis_filmova.jsx';
import Home from './components/Home.jsx';


const Root = createBrowserRouter([
      {
        path: "/",
        element: <App />, 
        children: [
          {
            path: "/popis_filmova",
            element: <Popis_filmova />,
          },
        ],
      },
      
    ]);


    ReactDOM.createRoot(document.getElementById("root")).render(
      <React.StrictMode>
        <RouterProvider router={Root} />
      </React.StrictMode>
    );