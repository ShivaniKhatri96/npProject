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
// import CircularProgress from "@mui/material/CircularProgress";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Button from "@mui/material/Button";
import { useContext } from "react";
import AuthKey from "../store/authKey";
import { useNavigate } from "react-router-dom";

const Home = (props) => {
  let navigate = useNavigate();
  const authCtx = useContext(AuthKey);
  const isLoggedIn = authCtx.isLoggedIn;
  //getting the liked data
  const onHandleLiked = (idClicked) => {
    //this gives me 1 article that has been clicked
    const article = props.articles.find((item) => item.id === idClicked);
    // checking if the item already exists in the liked state
    if (props.liked !== null) {
      const disliked = props.liked.filter((item) => item.id === article.id);
      if (Object.keys(disliked).length > 0) {
        props.setUnliked(disliked);
      }
      const filtered = props.liked.filter((item) => item.id !== article.id);
      props.liked.length === filtered.length
        ? props.setLiked((prevState) => [...prevState, article])
        : filtered.length > 0
        ? props.setLiked(filtered)
        : props.setLiked([]);
    } else {
      props.setLiked(article);
    }
  };

  // //getting the data for article page (learn/ setLearn)
  const onHandleLearn = (idLearn) => {
    const article = props.articles.find((item) => item.id === idLearn);
    localStorage.setItem('article', JSON.stringify(article));
    navigate("/article");
  };



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
      {props.topic.map((post) => {
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
              {props.articles
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
                              {!!props.liked.find(
                                (item) => item.id === con.id
                              ) ? (
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
