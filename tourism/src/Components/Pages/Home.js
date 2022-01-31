import * as React from "react";
import Grid from "@mui/material/Grid";
import myVideo from "../Videos/nepal.mp4";
import { Card, CardActions, CardContent, CardMedia } from "@mui/material";
import { Welcome, DivrHome } from "../../styles/HomeStyle";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { typography } from "@mui/system";
import Kathmandu from "../Pictures/places/kathmandu.jpg";
const Home = () => {
  //   {/* <Grid item xs={4}>
  // <Welcome elevation={0} className='satisfy'>Travel to Nepal <br />Experience rich culture <br /> & make a memory of lifetime </Welcome>
  //    </Grid>
  //    <Grid item xs={8}></Grid> */}
  return (
    <div>
      {/* bg video*/}

      <Card
        sx={{
          marginTop: { xs: "132px", sm: "135px", lg: "-20px" },
          marginBottom: "30px",
          // marginX: "100px",
          backgroundColor: "transparent",
        }}
        elevation={0}
      >
        <CardContent>
          <Grid container>
            <Grid item xs={1} />
            <Grid item xs={10}>
              {/* style={{width: "100%", height:"100%"}} */}
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
            <Grid item xs={1} />
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

        {/* Places to go */}

        <Grid item xs={1} />
        <Grid item xs={2.5}>
          <Card>
            <CardMedia component="img" alt="Kathmandu" height="220" image={Kathmandu} />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">Kathmandu</Typography>
              <Typography variant="body2" color="text.secondary">
              Kathmandu Valley comprises the three ancient cities of Kathmandu, Patan and Bhaktapur, which were once independent states ruled by the Malla kings from the 12th to the 18th centuries. 
              </Typography>
            </CardContent>
            <CardActions>
            <Button size="small">
               
              </Button>
              <Button size="small">
                Learn more
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={2.5}>
          <Card>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image="/static/images/cards/contemplative-reptile.jpg"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={2.5}>
          <Card>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image="/static/images/cards/contemplative-reptile.jpg"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={2.5}>
          <Card>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image="/static/images/cards/contemplative-reptile.jpg"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={1} />
      </Grid>
    </div>
  );
};
export default Home;
