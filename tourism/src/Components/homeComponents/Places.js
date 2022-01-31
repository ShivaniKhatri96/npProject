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
import Kathmandu from "../Pictures/places/kathmandu.jpg";
import Chitwan from "../Pictures/places/chitwan.jpg";
import Manang from "../Pictures/places/manang.jpg";
import Rara from "../Pictures/places/rara.jpg";
import { useContext } from "react";
import AuthKey from "../store/authKey";

const Places = () => {
  const authCtx = useContext(AuthKey);
  const isLoggedIn = authCtx.isLoggedIn;
  return (
    <Grid container spacing={3} sx={{ marginTop: "10px" }}>
      <Grid item xs={1} />
      <Grid item xs={10}>
        <Typography variant="h4" component="div" className="heading">
          Places to go
        </Typography>
      </Grid>
      <Grid item xs={1} />
      <Grid item xs={1} />
      <Grid item xs={2.5}>
        <Card>
          <CardMedia
            component="img"
            alt="Kathmandu"
            height="220"
            image={Kathmandu}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Kathmandu
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Kathmandu Valley comprises the three ancient cities of Kathmandu,
              Patan and Bhaktapur, which were once independent states ruled by
              the Malla kings from the 12th to the 18th centuries
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
            alt=" Chitwan"
            height="220"
            image={Chitwan}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Chitwan
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Chitwan, the popular Inner Terai valley, lies between foothills of
              the Himalaya, the Mahabharat and Siwalik ranges which gets its
              name from Chitrasen, the Tharu King, who once ruled here
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
            alt="Manang"
            height="220"
            image={Manang}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Manang
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Manang, one of the largest villages along the Annapurna Circuit,
              is a popular resting point for climbers acclimatizing before
              attempting the Thorong La Pass (5415 metres)
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
            alt="Rara"
            height="220"
            image={Rara}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Rara
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Visit Nepal's deepest Lake, the Rara, where one can hike through
              lovely Juniper forests or camp by the sparkling waters of the lake
              and enjoy the spectacular landscape that surrounds this pristine
              lake
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
export default Places;
