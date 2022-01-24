// import './App.css';

import { Routes, Route } from "react-router-dom";
import Home from "./Components/Pages/Home";
import Login from "./Components/Pages/Login";
import Signup from "./Components/Pages/Signup";
import Dashboard from "./Components/Pages/Dashboard";
import Profile from "./Components/Pages/Profile";
import Settings from "./Components/Pages/Settings";
import Travelinfo from "./Components/Pages/Travelinfo";
import Navbar from "./Components/miniComponents/Navbar";
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/settings" element={<Settings />}></Route>
        <Route path="/travelinfo" element={< Travelinfo />}></Route>
      </Routes>
    </div>
  );
}

export default App;
