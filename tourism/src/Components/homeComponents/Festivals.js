import * as React from "react";
import Grid from "@mui/material/Grid";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
} from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Dashain from "../Pictures/festivals/dashain.jpg";
import Tihar from "../Pictures/festivals/tihar.jpg";
import Shivaratri from "../Pictures/festivals/shivratri.jpg";
import Holi from "../Pictures/festivals/holi.jpg";
import { useContext } from "react";
import AuthKey from "../store/authKey";
import { useState } from "react";
const Festivals = () => {
  const authCtx = useContext(AuthKey);
  const isLoggedIn = authCtx.isLoggedIn;
  const[liked8, setLiked8]= useState(false);
const like8 = (e) => {
e.preventDefault();
setLiked8(!liked8);
}
const[liked9, setLiked9]= useState(false);
const like9 = (e) => {
  e.preventDefault();
  setLiked9(!liked9);
  }
  const[liked10, setLiked10]= useState(false);
const like10 = (e) => {
  e.preventDefault();
  setLiked10(!liked10);
  }
  const[liked11, setLiked11]= useState(false);
  const like11 = (e) => {
    e.preventDefault();
    setLiked11(!liked11);
    }
  return (
    <Grid container spacing={3} sx={{ marginTop: "10px" }}>
      <Grid item xs={1} />
      <Grid item xs={10}>
        <Typography className="heading" variant="h4" component="div">
          Festivals & Events
        </Typography>
      </Grid>
      <Grid item xs={1} />
      <Grid item xs={1} />
      <Grid item xs={10} sm={5} md={5} lg={2.5}>
        <Card>
          <CardMedia
            component="img"
            alt="Goddess Durga"
            height="220"
            image={Dashain}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Dashain
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Dashain is the longest Hindu festival in Nepal, celebrated with
              prayers and offerings to Goddess Durga, which is also a time for
              family reunions, exchange of gifts and blessings
            </Typography>
          </CardContent>
          <CardActions>
            {isLoggedIn && (
              <IconButton aria-label="add to favorites" onClick={like8}>
              {(liked8 === false) ? <FavoriteBorderIcon  /> : < FavoriteIcon color="secondary" />}
             </IconButton>
            )}
            <Button size="small">Learn more</Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={1} sx={{display:{xs:"flex",sm:"none"}}}/>
      <Grid item xs={1} sx={{display:{xs:"flex",sm:"none"}}}/>
      <Grid item xs={10} sm={5} md={5} lg={2.5}>
        <Card>
          <CardMedia component="img" alt="Lights" height="220" image={Tihar} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Tihar
            </Typography>
            <Typography variant="body2" color="text.secondary">
              The five-day festival of lights, known as Tihar honors Yama, the
              God of Death, meanwhile the worship of Laxmi, the Goddess of
              Wealth dominates the festivities
            </Typography>
          </CardContent>
          <CardActions>
            {isLoggedIn && (
              <IconButton aria-label="add to favorites" onClick={like9}>
              {(liked9 === false) ? <FavoriteBorderIcon  /> : < FavoriteIcon color="secondary" />}
             </IconButton>
            )}
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={1} sx={{display:{xs:"flex",lg:"none"}}}/>
      <Grid item xs={1} sx={{display:{xs:"flex",lg:"none"}}}/>
      <Grid item xs={10} sm={5} md={5} lg={2.5}>
        <Card>
          <CardMedia
            component="img"
            alt="Statue of lord Shiva"
            height="220"
            image={Shivaratri}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Shivaratri
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Travelers are highly recommended to visit Pashupatinath Temple
              during Shivaratri as thousands of hindu devotees from around the
              world come here to worship Lord Shiva
            </Typography>
          </CardContent>
          <CardActions>
            {isLoggedIn && (
              <IconButton aria-label="add to favorites" onClick={like10}>
              {(liked10 === false) ? <FavoriteBorderIcon  /> : < FavoriteIcon color="secondary" />}
             </IconButton>
            )}
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={1} sx={{display:{xs:"flex",sm:"none"}}}/>
      <Grid item xs={1} sx={{display:{xs:"flex",sm:"none"}}}/>
      <Grid item xs={10} sm={5} md={5} lg={2.5}>
        <Card>
          <CardMedia component="img" alt="colors" height="220" image={Holi} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Holi
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Holi is a festival of colors, indicating the
              end of the cold winter nights and the arrival of the beautiful
              spring season, where people apply colors and splash
              colourful water at one another
            </Typography>
          </CardContent>
          <CardActions>
            {isLoggedIn && (
              <IconButton aria-label="add to favorites" onClick={like11}>
              {(liked11 === false) ? <FavoriteBorderIcon  /> : < FavoriteIcon color="secondary" />}
             </IconButton>
            )}
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={1} />
    </Grid>
  );
};
export default Festivals;
