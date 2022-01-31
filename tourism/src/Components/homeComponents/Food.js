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
import Bhat from "../Pictures/food/bhat.jpg";
import Quati from "../Pictures/food/quati.jpg";
import Samosa from "../Pictures/food/samosa.jpg";
import Liquor from "../Pictures/food/liquor.jpg";
import { useContext } from "react";
import AuthKey from "../store/authKey";

const Food = () => {
  const authCtx = useContext(AuthKey);
  const isLoggedIn = authCtx.isLoggedIn;
  return (
    <Grid container spacing={3} sx={{ marginTop: "10px", marginBottom:"20px" }}>
      <Grid item xs={1} />
      <Grid item xs={10}>
        <Typography className="heading" variant="h4" component="div">
         Food & Culinary
        </Typography>
      </Grid>
      <Grid item xs={1} />
      <Grid item xs={1} />
      <Grid item xs={2.5}>
        <Card>
          <CardMedia
            component="img"
            alt="Bhat Tarkari"
            height="220"
            image={Bhat}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            Bhat Tarkari
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
            alt="Quati"
            height="220"
            image={Quati}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Quati
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
            alt="Samosa"
            height="220"
            image={Samosa}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Samosa
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
            alt="Liquor"
            height="220"
            image={Liquor}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
             Liquors of Nepal
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
export default Food;