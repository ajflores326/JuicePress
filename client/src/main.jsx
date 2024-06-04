import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import LogIn from './components/LogIn.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import SignUp from './components/SignUp.jsx';
import Home from './components/Home.jsx';
import AdminLogIn from './components/AdminLogIn.jsx';
import AdminSignUp from './components/AdminSignUp.jsx';
import CreateAnnouncement from './components/CreateAnnouncement.jsx';
import Profile from './components/Profile.jsx';
import AllAnnouncements from './components/AllAnnouncements.jsx';


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
  {
    path: "/adminLogin",
    element: <AdminLogIn></AdminLogIn>
  },
  {
    path: "/adminSignup",
    element: <AdminSignUp></AdminSignUp>
  },
{
  path: "/createannouncement",
  element: <CreateAnnouncement></CreateAnnouncement>
},
{
  path: "/profile",
  element: <Profile> </Profile>
},
{
  path: "/announcements",
  element: <AllAnnouncements> </AllAnnouncements>
}

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
