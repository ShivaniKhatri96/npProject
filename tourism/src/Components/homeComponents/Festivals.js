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

const Festivals = () => {
  const authCtx = useContext(AuthKey);
  const isLoggedIn = authCtx.isLoggedIn;
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
      <Grid item xs={2.5}>
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
            alt="Lights"
            height="220"
            image={Tihar}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Tihar
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
            alt="Statue of lord Shiva"
            height="220"
            image={Shivaratri}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Shivaratri
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
            alt="colors"
            height="220"
            image={Holi}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Holi
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
export default Festivals;