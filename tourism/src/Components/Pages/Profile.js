import Future from "../miniComponents/Future";
import Grid from "@mui/material/Grid";
import { useState, useEffect } from "react";
import {
    Card,
    CardMedia,
    CardContent,
    Typography
  } from "@mui/material";
const Profile = () => {
  //getting data for (fav) favourites from database
  const [fav, setFav] = useState([]);
  useEffect(() => {
    const url = "https://np-project-33535-default-rtdb.europe-west1.firebasedatabase.app/profile/liked.json";
    const fetchLiked = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setFav(data);
      }
      catch (error) {
        console.log("error", error);
      }
    };
    fetchLiked();
  }, []);
  console.log(fav);
  // const [one, setOne] = useState([]);
  // useEffect(() => {
  //   const url =
  //     "https://np-project-33535-default-rtdb.europe-west1.firebasedatabase.app/article/learn.json";
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch(url);
  //       const data = await response.json();
  //       setOne(data);
  //     } catch (error) {
  //       console.log("error", error);
  //     }
  //   };
  //   fetchData();
  // }, []);
  // console.log(one);

  return (
     <Future />
  );
};
export default Profile;
