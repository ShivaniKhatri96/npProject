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
import Mountain from "../Pictures/things/mountain.jpg";
import Jungle from "../Pictures/things/jungle.jpg";
import Hiking from "../Pictures/things/hiking.jpg";
import Paragliding from "../Pictures/things/paragliding.jpg";
import { useContext } from "react";
import AuthKey from "../store/authKey";

const Things = () => {
  const authCtx = useContext(AuthKey);
  const isLoggedIn = authCtx.isLoggedIn;
  return (
    <Grid container spacing={3} sx={{ marginTop: "10px" }}>
      <Grid item xs={1} />
      <Grid item xs={10}>
        <Typography className="heading" variant="h4" component="div">
          Things to do
        </Typography>
      </Grid>
      <Grid item xs={1} />
      <Grid item xs={1} />
      <Grid item xs={2.5}>
        <Card>
          <CardMedia
            component="img"
            alt="Mountain Viewing"
            height="220"
            image={Mountain}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Mountain Viewing
            </Typography>
            <Typography variant="body2" color="text.secondary">
              There are countless ways to see mountain views right from the time
              you fly into Kathmandu whether it is from your window on a plane ,
              from the airport, on a trek or just driving somewhere
            </Typography>
          </CardContent>
          <CardActions>
            {isLoggedIn && (
              <IconButton aria-label="add to favorites">
                <FavoriteBorderIcon />
              </IconButton>
            )}
            <Button size="small">Learn more</Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={2.5}>
        <Card>
          <CardMedia
            component="img"
            alt="Jungle"
            height="220"
            image={Jungle}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Jungle Discovery
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Large swathes of jungles are being protected as national parks and
              reserves which makes it possible for tourists to view wildlife
              whether it be on elephant back or a jeep safari
            </Typography>
          </CardContent>
          <CardActions>
            {isLoggedIn && (
              <IconButton aria-label="add to favorites">
                <FavoriteBorderIcon />
              </IconButton>
            )}
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={2.5}>
        <Card>
          <CardMedia
            component="img"
            alt="Hiking"
            height="220"
            image={Hiking}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Hiking
            </Typography>
            <Typography variant="body2" color="text.secondary">
              A wanderer’s paradise Nepal has plenty of options for both
              professional and amateur hikers. The Kathmandu Valley alone has
              over 50 hiking trails ranging from easy to difficult
            </Typography>
          </CardContent>
          <CardActions>
            {isLoggedIn && (
              <IconButton aria-label="add to favorites">
                <FavoriteBorderIcon />
              </IconButton>
            )}
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={2.5}>
        <Card>
          <CardMedia
            component="img"
            alt="Paragliding"
            height="220"
            image={Paragliding}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Paragliding
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Enjoy the thrills of paragliding over spectacular landscapes
              taking in unbelievable views of the Himalayan mountains, pristine
              lakes and verdant valleys like nowhere else on earth
            </Typography>
          </CardContent>
          <CardActions>
            {isLoggedIn && (
              <IconButton aria-label="add to favorites">
                <FavoriteBorderIcon />
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
export default Things;
