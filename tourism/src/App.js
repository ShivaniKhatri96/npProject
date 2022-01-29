// import './App.css';

import { Routes, Route } from "react-router-dom";
import Home from "./Components/Pages/Home";
import Connect from "./Components/Pages/Connect";
import Dashboard from "./Components/Pages/Dashboard";
import Profile from "./Components/Pages/Profile";
import Settings from "./Components/Pages/Settings";
import Travelinfo from "./Components/Pages/Travelinfo";
import Header from "./Components/miniComponents/Header";
// import { ThemeProvider } from "@mui/private-theming";
// import theme from "./Components/Breakpoints";
function App() {
  return (
    <div>
        <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/connect" element={<Connect />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/settings" element={<Settings />}></Route>
        <Route path="/travelinfo" element={<Travelinfo />}></Route>
      </Routes>
    </div>
  );
}

export default App;
