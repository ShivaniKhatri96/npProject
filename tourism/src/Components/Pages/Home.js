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
} from "@mui/material";
import { Welcome, DivrHome } from "../../styles/HomeStyle";
import Places from "../homeComponents/Places";
import Things from "../homeComponents/Things";
import Festivals from "../homeComponents/Festivals";
import Food from "../homeComponents/Food";
import CircularProgress from "@mui/material/CircularProgress";
import { useState, useEffect} from "react";
// import Data from "../../data.json";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Button from "@mui/material/Button";
import { useContext } from "react";
import AuthKey from "../store/authKey";
import { useNavigate } from "react-router-dom";
const Home = () => {
 let navigate = useNavigate();
  const authCtx = useContext(AuthKey);
  const isLoggedIn = authCtx.isLoggedIn;
  const [articles, setArticles] = useState([]);
  const [liked, setLiked] = useState([]);
  const [learn, setLearn] = useState([]);
  const arrLength = Object.keys(learn).length;
  useEffect(() => {
    // const url = "data/data.json";
    const url = "https://np-project-33535-default-rtdb.europe-west1.firebasedatabase.app/cards.json"
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

  // console.log(articles);
  // console.log(articles.map((article) => article.content));

  const onHandleLiked = (idLiked) => {
    const findArticle = articles.find((article) =>
      article.content.some((item) => item.id === idLiked)
    );
    const found = findArticle.content.find((item) => item.id === idLiked);
    const filtered = liked.filter((item) => item.id !== found.id);
    liked.length === filtered.length
      ? setLiked((prevState) => [...prevState, found])
      : setLiked(filtered);
  };
  //console.log(liked);

  const onHandleLearn = (idLearn) => {
    // idLearn.preventDefault();
    const findArticle = articles.find((article) =>
    article.content.some((item) => item.id === idLearn)
  );
  const found = findArticle.content.find((item) => item.id === idLearn);
    setLearn(found);
    // navigate("/article");
  }
  //console.log(learn);
  // console.log(Object.keys(learn).length);
useEffect(() => {
  const postData = async () => {
    if(arrLength !== 0){
      const res = await fetch(
        "https://np-project-33535-default-rtdb.europe-west1.firebasedatabase.app/article.json",{
          method: "PUT",
          headers: {
            "Content-Type":"application/json",
          },
          body:JSON.stringify({
            learn
          })
        }
      );
      if(res){
        console.log("Data stored");
        setLearn([]);
        navigate("/article");
      }
      else{
        console.log("fix the issue!!");
      }
    }
  }

  postData()
  .catch(console.error);
 
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
      {/* {Data.map((post) => { */}
      {articles.map((post) => {
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
              {post.content.map((con) => {
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
                            {!!liked.find((item) => item.id === con.id ) ? (
                               <FavoriteIcon color="secondary" />
                            ) : (
                              <FavoriteBorderIcon />
                            )}
                          </IconButton>
                        )}
                        <Button size="small" onClick={() => onHandleLearn(con.id)}>Learn more</Button>
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
