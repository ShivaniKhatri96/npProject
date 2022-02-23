import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
} from "@mui/material";
const Profile = (props) => {
  console.log(props.liked);
  return (
    <Grid
    container
    spacing={3}
    sx={{
      marginY: "80px",
      display: "flex",
      justifyContent: "center",
    }}
  >
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
