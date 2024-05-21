import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import LogIn from './components/LogIn.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import SignUp from './components/SignUp.jsx'
import Home from './components/Home.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <LogIn> </LogIn>,
  },
  {
    path: "/signup",
    element: <SignUp> </SignUp>,
  },
  {
    path: "/home",
    element: <Home> </Home>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
