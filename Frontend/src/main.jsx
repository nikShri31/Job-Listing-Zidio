import React from "react";
import ReactDOM from "react-dom/client";
//import App from './App.jsx'
import "./index.css";
// import { RouterProvider } from 'react-router-dom'
// import router from './Router/Router'
import App from "./App";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import ProfilePage from "./Pages/ProfilePage";
import HomePage from "./Pages/HomePage";
import Dashboard from "./Pages/Dashboard";
import AccountPage from "./Pages/AccountPage";
import JD from "./Pages/Jd_Page";
import LandingPage from "./Pages/LandingPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
     <Route path="/" element={<LandingPage />}/>
      <Route path="/Home" element={<HomePage />} />
      <Route path="/jd" element={<JD />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/account" element={<AccountPage />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
