// import './App.css';

import { Routes, Route } from "react-router-dom";
import Home from "./Components/Pages/Home";
import Connect from "./Components/Pages/Connect";
import Dashboard from "./Components/Pages/Dashboard";
import Profile from "./Components/Pages/Profile";
import Settings from "./Components/Pages/Settings";
import Travelinfo from "./Components/Pages/Travelinfo";
import Header from "./Components/miniComponents/Header";
import { useContext } from "react";
import AuthKey from "./Components/store/authKey";
import {Navigate} from "react-router";
function App() {
  const authCtx = useContext(AuthKey);
  console.log(authCtx.isLoggedIn);
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        {!authCtx.isLoggedIn && (
        <Route path="/connect" element={<Connect />}></Route>
        )}
        {authCtx.isLoggedIn && (
          <Route path="/dashboard" element={<Dashboard />}></Route>
        )}
        {authCtx.isLoggedIn && (
          <Route path="/profile" element={<Profile />}></Route>
        )}
        {authCtx.isLoggedIn && (
          <Route path="/settings" element={<Settings />}></Route>
        )}
        {authCtx.isLoggedIn && (
          <Route path="/travelinfo" element={<Travelinfo />}></Route>
        )}
        <Route path="*" element={<Navigate replace to="/"/>} /> 
      </Routes>
    </div>
  );
}

export default App;
