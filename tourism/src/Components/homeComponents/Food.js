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
import Momo from "../Pictures/food/momo.jpg";
import { useContext } from "react";
import AuthKey from "../store/authKey";

const Food = () => {
  const authCtx = useContext(AuthKey);
  const isLoggedIn = authCtx.isLoggedIn;
  return (
    <Grid
      container
      spacing={3}
      sx={{ marginTop: "10px", marginBottom: "20px" }}
    >
      <Grid item xs={1} />
      <Grid item xs={10}>
        <Typography className="heading" variant="h4" component="div">
          Food & Culinary
        </Typography>
      </Grid>
      <Grid item xs={1} />
      <Grid item xs={1} />
      <Grid item xs={10} sm={5} md={5} lg={2.5}>
        <Card>
          <CardMedia
            component="img"
            alt="Bhat Tarkari"
            height="220"
            image={Bhat}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Dal Bhat Tarkari
            </Typography>
            <Typography variant="body2" color="text.secondary">
              The meal is comprised of rice and vegetable soup or it is
              comprised of rice, dal, vegetables with achar (sauce or dip). Dal
              may represent black, red, yellow, green or mixed lentil soup
              depending on the season
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
      <Grid item xs={1} sx={{display:{xs:"flex",sm:"none"}}}/>
      <Grid item xs={1} sx={{display:{xs:"flex",sm:"none"}}}/>
      <Grid item xs={10} sm={5} md={5} lg={2.5}>
        <Card>
          <CardMedia component="img" alt="Quati" height="220" image={Quati} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Quati
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Quanti soup consists of nine different types of sprouted beans
              rich in vitamins and proteins. This dish also symbolizes a
              specific festival in Nepal called Janai Purnima (full moon
              festival, August)
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
      <Grid item xs={1} sx={{display:{xs:"flex",lg:"none"}}}/>
      <Grid item xs={1} sx={{display:{xs:"flex",lg:"none"}}}/>
      <Grid item xs={10} sm={5} md={5} lg={2.5}>
        <Card>
          <CardMedia component="img" alt="Samosa" height="220" image={Samosa} />
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
      <Grid item xs={1} sx={{display:{xs:"flex",sm:"none"}}}/>
      <Grid item xs={1} sx={{display:{xs:"flex",sm:"none"}}}/>
      <Grid item xs={10} sm={5} md={5} lg={2.5}>
        <Card>
          <CardMedia component="img" alt="Momo" height="220" image={Momo} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Momo
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Momo is prepared using minced chicken, mutton, grated paneer,
              cheese or vegetables. While the momos are mainly steamed, they are
              also fried or eaten with soup
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
