// import * as React from "react";
// import Grid from "@mui/material/Grid";
// import {
//   Card,
//   CardActions,
//   CardContent,
//   CardMedia,
//   IconButton,
// } from "@mui/material";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
// import Mountain from "../Pictures/things/mountain.jpg";
// import Jungle from "../Pictures/things/jungle.jpg";
// import Hiking from "../Pictures/things/hiking.jpg";
// import Paragliding from "../Pictures/things/paragliding.jpg";
// import { useContext } from "react";
// import AuthKey from "../store/authKey";
// import { useState } from "react";
// const Things = () => {
//   const authCtx = useContext(AuthKey);
//   const isLoggedIn = authCtx.isLoggedIn;
//   const[liked4, setLiked4]= useState(false);
// const like4 = (e) => {
// e.preventDefault();
// setLiked4(!liked4);
// }
// const[liked5, setLiked5]= useState(false);
// const like5 = (e) => {
//   e.preventDefault();
//   setLiked5(!liked5);
//   }
//   const[liked6, setLiked6]= useState(false);
// const like6 = (e) => {
//   e.preventDefault();
//   setLiked6(!liked6);
//   }
//   const[liked7, setLiked7]= useState(false);
//   const like7 = (e) => {
//     e.preventDefault();
//     setLiked7(!liked7);
//     }
//   return (
//     <div>
// <Grid container spacing={3} sx={{ marginTop: "10px" }}>
//       <Grid item xs={1} />
//       <Grid item xs={10}>
//         <Typography className="heading" variant="h4" component="div">
//           Things to do
//         </Typography>
//       </Grid>
//       <Grid item xs={1} />
//       <Grid item xs={1} />
//       <Grid item xs={10} sm={5} md={5} lg={2.5}>
//         <Card>
//           <CardMedia
//             component="img"
//             alt="Mountain Viewing"
//             height="220"
//             image={Mountain}
//           />
//           <CardContent>
//             <Typography gutterBottom variant="h5" component="div">
//               Mountain Viewing
//             </Typography>
//             <Typography variant="body2" color="text.secondary">
//               There are countless ways to view mountains right from the time
//               you fly into Kathmandu: from your window on a plane,
//               from the airport, on a trek or just driving somewhere
//             </Typography>
//           </CardContent>
//           <CardActions>
//             {isLoggedIn && (
//               <IconButton aria-label="add to favorites" onClick={like4}>
//               {(liked4 === false) ? <FavoriteBorderIcon  /> : < FavoriteIcon color="secondary" />}
//              </IconButton>
//             )}
//             <Button size="small">Learn more</Button>
//           </CardActions>
//         </Card>
//       </Grid>
//       <Grid item xs={1} sx={{display:{xs:"flex",sm:"none"}}}/>
//       <Grid item xs={1} sx={{display:{xs:"flex",sm:"none"}}}/>
      
//       <Grid item xs={10} sm={5} md={5} lg={2.5}>
//         <Card>
//           <CardMedia
//             component="img"
//             alt="Jungle"
//             height="220"
//             image={Jungle}
//           />
//           <CardContent>
//             <Typography gutterBottom variant="h5" component="div">
//               Jungle Discovery
//             </Typography>
//             <Typography variant="body2" color="text.secondary">
//               Large swathes of jungles are being protected as national parks and
//               reserves which makes it possible for tourists to view wildlife
//               whether it be on elephant back or a jeep safari
//             </Typography>
//           </CardContent>
//           <CardActions>
//             {isLoggedIn && (
//               <IconButton aria-label="add to favorites" onClick={like5}>
//               {(liked5 === false) ? <FavoriteBorderIcon  /> : < FavoriteIcon color="secondary" />}
//              </IconButton>
//             )}
//             <Button size="small">Learn More</Button>
//           </CardActions>
//         </Card>
//       </Grid>
//       <Grid item xs={1} sx={{display:{xs:"flex",lg:"none"}}}/>
//       <Grid item xs={1} sx={{display:{xs:"flex",lg:"none"}}}/>
//       <Grid item xs={10} sm={5} md={5} lg={2.5}>
//         <Card>
//           <CardMedia
//             component="img"
//             alt="Hiking"
//             height="220"
//             image={Hiking}
//           />
//           <CardContent>
//             <Typography gutterBottom variant="h5" component="div">
//               Hiking
//             </Typography>
//             <Typography variant="body2" color="text.secondary">
//               A wanderer’s paradise Nepal has plenty of options for both
//               amateur and professional hikers. The Kathmandu valley alone has
//               over 50 hiking trails from easy to difficult
//             </Typography>
//           </CardContent>
//           <CardActions>
//             {isLoggedIn && (
//               <IconButton aria-label="add to favorites" onClick={like6}>
//               {(liked6 === false) ? <FavoriteBorderIcon  /> : < FavoriteIcon color="secondary" />}
//              </IconButton>
//             )}
//             <Button size="small">Learn More</Button>
//           </CardActions>
//         </Card>
//       </Grid>
//       <Grid item xs={1} sx={{display:{xs:"flex",sm:"none"}}}/>
//       <Grid item xs={1} sx={{display:{xs:"flex",sm:"none"}}}/>
//       <Grid item xs={10} sm={5} md={5} lg={2.5}>
//         <Card>
//           <CardMedia
//             component="img"
//             alt="Paragliding"
//             height="220"
//             image={Paragliding}
//           />
//           <CardContent>
//             <Typography gutterBottom variant="h5" component="div">
//               Paragliding
//             </Typography>
//             <Typography variant="body2" color="text.secondary">
//               Enjoy the thrills of paragliding over spectacular landscapes
//               taking in unbelievable views of the Himalayan mountains, pristine
//               lakes and valleys like nowhere else on earth
//             </Typography>
//           </CardContent>
//           <CardActions>
//             {isLoggedIn && (
//               <IconButton aria-label="add to favorites" onClick={like7}>
//               {(liked7 === false) ? <FavoriteBorderIcon  /> : < FavoriteIcon color="secondary" />}
//              </IconButton>
//             )}
//             <Button size="small">Learn More</Button>
//           </CardActions>
//         </Card>
//       </Grid>
//       <Grid item xs={1} />
//     </Grid>
//     </div>
    
//   );
// };
// export default Things;
