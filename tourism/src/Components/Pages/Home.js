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
import { useState, useEffect } from "react";
import Data from "../../data.json";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Button from "@mui/material/Button";
import { useContext } from "react";
import AuthKey from "../store/authKey";
const Home = () => {
  const authCtx = useContext(AuthKey);
  const isLoggedIn = authCtx.isLoggedIn;
  const [count, setCount] = useState(0);
  // const [liked, setLiked] = useState(false);
  // const arr = [];
  // <li key={con.id}>{con.title}</li>;
  // <span>{arr.push(`${con.id}`)}</span>
  // Data.map((post) =>  post.content.map((con) =>

  //        <>
  //       const [`liked${con.id}`, `setLiked${con.id}`] = useState(false);
  // const `like${con.id}` = () => {
  //   `setLiked${con.id}`(!`liked${con.id}`)
  // }

  //        </>
  //   )
  // );
  // arr.map((id) => )
  // const [liked, setLiked] = useState(false);
  // const like = (e) => {
  //   e.preventDefault();
  //   setLiked(!liked);
  // };
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
              controls
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
                controls
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
        {/* <Grid item xs={12}>
          {Data.map((post) => {
            return (
              <Welcome key={post.id}>
                <h5>{post.title}</h5>
                {post.content.map((con) => {
                  return <li key={con.id}>{con.title}</li>;
                })}
              </ Welcome>
            );
          })}
         </Grid> */}
      </Grid>

      {Data.map((post) => {
        return (
          <div key={post.id}>
            <Grid container spacing={3} sx={{ marginTop: "10px" }}>
              <Grid item xs={1} />
              <Grid item xs={10}>
                <Typography className="heading" variant="h4" component="div">
                  {post.title}
                </Typography>
              </Grid>
              <Grid item xs={1} />
              <Grid item xs={1} />

              {post.content.map((con) => {
                const img = process.env.PUBLIC_URL + con.img;
                // const count = 0;
                // (count > 4) ?  setCount(prevState => (0)) :  setCount(prevState => (prevState + 1));
                // console.log(count);
                return (
                  <>
                  {/* sx={{display:"flex", justifyContent:"center"}} */}
                    <Grid item xs={10} sm={5} lg={2.5} >
                      <Card key={con.id}>
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
                              onClick={`like${con.id}`}
                            >
                              {`liked${con.id}` === false ? (
                                <FavoriteBorderIcon />
                              ) : (
                                <FavoriteIcon color="secondary" />
                              )}
                            </IconButton>
                          )}
                          <Button size="small">Learn more</Button>
                        </CardActions>
                      </Card>
                    </Grid>

                    <Grid
                      item
                      xs={1}
                      sx={{ display: { xs: "flex", sm: "none" } }}
                    />
                    <Grid
                      item
                      xs={1}
                      sx={{ display: { xs: "flex", sm: "none" } }}
                    />
      
                    {/* {con.id === 2 && (
                      <>
                        <Grid
                          item
                          sm={1}
                          sx={{ display: { sm: "flex", lg: "none" } }}
                        />
                        <Grid
                          item
                          sm={1}
                          sx={{ display: { sm: "flex", lg: "none" } }}
                        />
                      </>
                    )} */}
                  </>
                );
                // <li key={con.id}>{con.title}</li>;
              })}

              {/* <Grid item sm={1} sx={{display:{sm:"flex",lg:"none"}}}/> */}

              <Grid item xs={1} />
            </Grid>
          </div>
        );
      })}

      {/* Places to go */}
      {/* <Places />
       <Things />
      <Festivals />
      <Food />
       */}
    </div>
  );
};
export default Home;
