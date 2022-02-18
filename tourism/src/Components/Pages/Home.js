import * as React from "react";
import Grid from "@mui/material/Grid";
import myVideo from "../Videos/nepal.mp4";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  IconButton,
  linkClasses,
} from "@mui/material";
import { Welcome, DivrHome } from "../../styles/HomeStyle";
import Places from "../homeComponents/Places";
import Things from "../homeComponents/Things";
import Festivals from "../homeComponents/Festivals";
import Food from "../homeComponents/Food";
import CircularProgress from "@mui/material/CircularProgress";
import { useState, useEffect } from "react";
// import Data from "../../data.json";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Button from "@mui/material/Button";
import { useContext } from "react";
import AuthKey from "../store/authKey";
import { useNavigate } from "react-router-dom";
import db from "../../db";
const Home = () => {
  let navigate = useNavigate();
  const authCtx = useContext(AuthKey);
  const isLoggedIn = authCtx.isLoggedIn;
  const [articles, setArticles] = useState([]);
  const [topic, setTopic] = useState([]);
  const [liked, setLiked] = useState([]);
  const [learn, setLearn] = useState([]);
  const arrLength = Object.keys(learn).length;
  useEffect(() => {
    // const url = "data/data.json";
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
  // console.log(articles);

  // useEffect(() => {
  //   // const url = "data/data.json";
  //   const url =
  //     "https://np-project-33535-default-rtdb.europe-west1.firebasedatabase.app/profile/liked.json";
  //   const fetchLikedData = async () => {
  //     try {
  //       const response = await fetch(url);
  //       const data = await response.json();
  //       if(data !== null){
  //         setLiked(data);
  //       }
  //     } catch (error) {
  //       console.log("error", error);
  //     }
  //   };
  //   fetchLikedData();
  // }, []);
  // console.log(liked);
  //getting the liked data
  const onHandleLiked = (idLiked) => {
    const article = articles.find((item) => item.id === idLiked);
    // //checking if the item already exists in the liked state
    // if(liked !== null){
      
      // const filtered = liked.filter((item) => item.id !== article.id);
      // liked.length === filtered.length
      //   ? setLiked((prevState) => [...prevState, article])
      //   : filtered.length > 0
      //   ? setLiked(filtered)
      //   : setLiked([]);
    // }
    // else {
    //   setLiked(article)
    // }
    setLiked(article);
  };
  console.log(liked);
  console.log(liked.length);
  console.log(Object.keys(liked).length);
//  // pushing favourites (liked) to database
  useEffect(() => {
   if(liked.length !== 0){
    const postFavData = async () => {
      try {
        db.database().ref(`articles/${liked.id}/`).update({
         like: !liked.like
        })
      }
      catch(error){
        console.log(error)
      }
    };
    postFavData().catch(console.error);
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

    

    //   if (liked.length > 0) {
    //     const res = await fetch(
    //       "https://np-project-33535-default-rtdb.europe-west1.firebasedatabase.app/profile.json",
    //       {
    //         method: "PUT",
    //         headers: {
    //           "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify({
    //          liked
    //         }),
    //       }
    //     );
    //     if (res) {
    //       console.log("Data stored");
    //     } else {
    //       console.log("fix the issue!!");
    //     }
    //   }
    //  };
    //  postFavData().catch(console.error);
   
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [liked]);
 
  // //getting the data for article page (learn/ setLearn)
  const onHandleLearn = (idLearn) => {
     const article = articles.find((item) => item.id === idLearn)
    setLearn(article);
  };
  //console.log(learn);
  // // console.log(Object.keys(learn).length);

  // //pushing article (learn) to database
  useEffect(() => {
    const postData = async () => {
      if (arrLength !== 0) {
        const res = await fetch(
          "https://np-project-33535-default-rtdb.europe-west1.firebasedatabase.app/article.json",
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              learn,
            }),
          }
        );
        if (res) {
          console.log("Data stored");
          setLearn([]);
          navigate("/article");
        } else {
          console.log("fix the issue!!");
        }
      }
    };

    postData().catch(console.error);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [learn]);
  return (
    <div>
      <Card
        // -16px
        //xl: "-85px"
        //xl: "auto"
        sx={{
          marginTop: {
            xs: "120px",
            sm: "50px",
            md: "30px",
            lg: "25px",
            xl: "auto",
          },
          marginBottom: {
            xs: "10px",
            sm: "30px",
            md: "20px",
            lg: "25px",
            xl: "25px",
          },
          backgroundColor: "transparent",
        }}
        elevation={0}
      >
        {/* <CardContent><CircularProgress /></CardContent> */}
        {/* <Grid container>
          <Grid item xs={12}>
            <CardMedia
              component="video"
              //controls le sab screen maximize garne haru control dekhaucha
              //controls
              loop
              autoPlay
              muted
              image={myVideo}
              title="Glimpse of Nepal"
              style={{
                width: "100%",
                minHeight: "130%",
                opacity: "0.80",
                overflow: "hidden",
              }}
            ></CardMedia>
          </Grid>
        </Grid> */}

        <CardContent>
          <Grid container>
            <Grid item xs={0.5} sm={1} />
            <Grid item xs={11} sm={10}>
              <video
                // //controls le sab screen maximize garne haru control dekhaucha
                // controls
                loop
                autoPlay
                muted
                style={{
                  width: "100%",
                  minHeight: "130%",
                  opacity: "0.80",
                  overflow: "hidden",
                }}
              >
                <source src={myVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </Grid>
            <Grid item xs={0.5} sm={1} />
          </Grid>
        </CardContent>
      </Card>

      {/*travel to nepal...*/}

      <Grid container spacing={3}>
        <Grid item xs={1} />
        <Grid item xs={10}>
          <DivrHome />
          <Grid item xs={12}>
            <Welcome elevation={0} className="satisfy">
              Travel to Nepal <br />
              Experience rich culture & make a memory of lifetime
            </Welcome>
          </Grid>
          <DivrHome />
        </Grid>
        <Grid item xs={1} />
      </Grid>
      {topic.map((post) => {
        return (
          <div key={post.id}>
            <Grid
              container
              spacing={3}
              sx={{
                marginY: "10px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Grid item xs={10}>
                <Typography className="heading" variant="h4" component="div">
                  {post.title}
                </Typography>
              </Grid>
              {articles
                .filter((article) => article.topic === post.id)
                .map((con) => {
                  const img = process.env.PUBLIC_URL + con.img;
                  return (
                    <Grid item xs={10} sm={5} lg={2.5} key={con.id}>
                      <Card>
                        <CardMedia
                          component="img"
                          title={con.title}
                          height="220"
                          image={img}
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="div">
                            {con.name}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {con.content}
                          </Typography>
                        </CardContent>
                        <CardActions>
                          {isLoggedIn && (
                            <IconButton
                              aria-label="add to favorites"
                              onClick={() => onHandleLiked(con.id)}
                            >
                              {/* || !!pulledLiked.find((item) => item.id === con.id) */}
                              {con.like === true ? (
                                <FavoriteIcon color="secondary" />
                              ) : (
                                <FavoriteBorderIcon />
                              )}
                            </IconButton>
                          )}
                          <Button
                            size="small"
                            onClick={() => onHandleLearn(con.id)}
                          >
                            Learn more
                          </Button>
                        </CardActions>
                      </Card>
                    </Grid>
                  );
                })}
            </Grid>
          </div>
        );
      })}
    </div>
  );
};
export default Home;
