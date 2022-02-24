import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  IconButton,
} from "@mui/material";
import { DivrFav, Typo } from "../../styles/ProfileStyle";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
const Profile = (props) => {
  const deleteHandler= (id) => {
   const filtered = props.liked.filter((item) => item.id !== id);
   props.setLiked(filtered);
   const remove = props.liked.filter((item) => item.id === id);
    props.setUnliked(remove);
  }

  console.log(props.liked);
  // const onHandleLiked = (idClicked) => {
  //   //this gives me 1 article that has been clicked
  //   const article = props.articles.find((item) => item.id === idClicked);
  //   // checking if the item already exists in the liked state
  //   if (props.liked !== null) {
  //     const disliked = props.liked.filter((item) => item.id === article.id);
  //     if (Object.keys(disliked).length > 0) {
  //       setUnliked(disliked);
  //     }
  //     const filtered = props.liked.filter((item) => item.id !== article.id);
  //     props.liked.length === filtered.length
  //       ? props.setLiked((prevState) => [...prevState, article])
  //       : filtered.length > 0
  //       ? props.setLiked(filtered)
  //       : props.setLiked([]);
  //   } else {
  //     props.setLiked(article);
  //   }
  // };
  return (
    <Grid
      container
      spacing={2}
      sx={{
        //80
        marginTop: {
          xs: "125px",
          sm: "60px",
          md: "55px",
          lg: "65px",
          xl: "75px",
        },
        marginBottom: "10px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Grid item xs={4} />
      <Grid item xs={4} sx={{ display: "flex", justifyContent: "center" }}>
        <Typo className="heading" component="div">
          Favorites
        </Typo>
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
              <CardActions sx={{display:"flex", justifyContent: "space-between"}}>
                <Button
                  size="small"
                  // onClick={() => onHandleLearn(con.id)}
                >
                  Learn more
                </Button>
                <IconButton aria-label="add to favorites" onClick={() => deleteHandler(con.id)}><DeleteOutlineIcon /></IconButton>
              </CardActions>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
};
export default Profile;
