import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
} from "@mui/material";
import { DivrFav, Typo } from "../../styles/ProfileStyle";
const Profile = (props) => {
  return (
    <Grid
      container
      spacing={2}
      sx={{
        marginY: "80px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Grid item xs={4} />
      <Grid item xs={4} sx={{ display: "flex", justifyContent: "center" }}>
        <Typo className="heading" component="div">Favorites</Typo>
      </Grid>
      <Grid item xs={4} />
      <Grid item xs={10}>
        <DivrFav />
      </Grid>
      {props.liked.map((con) => {
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
                <Button
                  size="small"
                  // onClick={() => onHandleLearn(con.id)}
                >
                  Learn more
                </Button>
              </CardActions>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
};
export default Profile;
