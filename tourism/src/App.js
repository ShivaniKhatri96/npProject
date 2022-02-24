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
import db from "./db";
function App() {
  const authCtx = useContext(AuthKey);
  console.log(authCtx.isLoggedIn);
  const [articles, setArticles] = useState([]);
  const [topic, setTopic] = useState([]);
  const [liked, setLiked] = useState([]);
  const [unliked, setUnliked] = useState([]);
  const userId = authCtx.userId;
  useEffect(() => {
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
  console.log(liked);
  useEffect(() => {
    if (authCtx.isLoggedIn === false) {
      setLiked([]);
      setUnliked([]);
    } else {
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
    }
  }, [authCtx.isLoggedIn]);
  useEffect(() => {
    if (
      articles !== null &&
      userId !== null &&
      Object.keys(articles).length > 0
    ) {
      for (let article of articles) {
        for (const key in article) {
          if (article.hasOwnProperty(key) && key === userId) {
            setLiked((prevState) => [...prevState, article]);
          }
        }
      }
    }
  }, [articles]);
  useEffect(() => {
    if (
      authCtx.isLoggedIn === true &&
      liked !== null &&
      Object.keys(liked).length > 0
    ) {
      for (const i of liked) {
        const postFavData = async () => {
          try {
            db.database()
              .ref(`/articles/${i.id}/`)
              .child(`${userId}`)
              .set({ likedBy: true });
            console.log("liked sent to db");
          } catch (error) {
            console.log(error);
          }
        };
        postFavData().catch(console.error);
      }
    }
  }, [liked]);
  useEffect(() => {
    if (
      authCtx.isLoggedIn === true &&
      unliked !== null &&
      Object.keys(unliked).length > 0
    ) {
      for (const i of unliked) {
        const postData = async () => {
          try {
            db.database().ref(`/articles/${i.id}/`).child(`${userId}`).remove();
            console.log("unliked sent to db");
          } catch (error) {
            console.log(error);
          }
        };
        postData().catch(console.error);
      }
    }
  }, [unliked]);

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
              unliked={unliked}
              setUnliked={setUnliked}
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
            element={<Profile liked={liked} setLiked={setLiked} unliked={unliked} setUnliked={setUnliked} />}
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
