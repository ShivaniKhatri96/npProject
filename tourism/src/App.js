// import './App.css';

import { Routes, Route } from "react-router-dom";
import Home from "./Components/Pages/Home";
import Connect from "./Components/Pages/Connect";
import Dashboard from "./Components/Pages/Dashboard";
import Profile from "./Components/Pages/Profile";
import Settings from "./Components/Pages/Settings";
import Travelinfo from "./Components/Pages/Travelinfo";
import Header from "./Components/miniComponents/Header";
import Article from "./Components/Pages/Article";
import { useContext } from "react";
import AuthKey from "./Components/store/authKey";
import { Navigate } from "react-router";
import { useState, useEffect } from "react";

function App() {
  const authCtx = useContext(AuthKey);
  console.log(authCtx.isLoggedIn);
  const [articles, setArticles] = useState([]);
  const [topic, setTopic] = useState([]);
  const [liked, setLiked] = useState([]);

  if(!authCtx.isLoggedIn){
    setLiked([]);
  }


  useEffect(() => {
    const url =
      "https://np-project-33535-default-rtdb.europe-west1.firebasedatabase.app/articles.json";
        const fetchData = async () => {
          try {
            const response = await fetch(url);
            const data = await response.json();
            setArticles(data);
          } catch (error) {
            console.log("error", error);
          }
        };
        fetchData();
  }, []);
  //console.log(articles);
  useEffect(() => {
    // const url = "data/topic.json";
    const url =
      "https://np-project-33535-default-rtdb.europe-west1.firebasedatabase.app/topic.json";
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setTopic(data);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, []);
  console.log(articles);
  

  return (
    <div>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              articles={articles}
              setArticles={setArticles}
              topic={topic}
              setTopic={setTopic}
              liked={liked}
              setLiked={setLiked}
            />
          }
        ></Route>
        <Route path="/article" element={<Article />}></Route>
        {!authCtx.isLoggedIn && (
          <Route path="/connect" element={<Connect />}></Route>
        )}
        {authCtx.isLoggedIn && (
          <Route path="/dashboard" element={<Dashboard />}></Route>
        )}
        {authCtx.isLoggedIn && (
          <Route
            path="/profile"
            element={<Profile liked={liked} setLiked={liked} />}
          ></Route>
        )}
        {authCtx.isLoggedIn && (
          <Route path="/settings" element={<Settings />}></Route>
        )}
        {authCtx.isLoggedIn && (
          <Route path="/travelinfo" element={<Travelinfo />}></Route>
        )}
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
