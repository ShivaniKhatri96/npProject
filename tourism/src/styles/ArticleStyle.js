import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Grid1 = styled(Grid)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  marginTop: "120px",
  [theme.breakpoints.up("sm")]: {
    marginTop: "50px",
  },
  [theme.breakpoints.up("md")]: {
    marginTop: "80px",
    marginBottom:"25px"
  },
}));

export const Grid2 = styled(Grid)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    marginTop: "20px",
    [theme.breakpoints.up("sm")]: {
      marginTop: "30px",
    },
    [theme.breakpoints.up("xl")]: {
      marginTop: "40px",
    },
  }));

export const Art = styled(CardMedia)(({ theme }) => ({
  height: "200px",
  [theme.breakpoints.up("sm")]: {
    height: "340px",
  },
  [theme.breakpoints.up("md")]: {
    height: "300px",
  },
  [theme.breakpoints.up("lg")]: {
    height: "340px",
  },
  [theme.breakpoints.up("xl")]: {
    height: "400px",
  },
}));

export const Typo = styled(Typography)(({theme}) => ({
 fontSize: "50px",
 [theme.breakpoints.up("sm")]: {
  fontSize: "70px",
},
[theme.breakpoints.up("md")]: {
  fontSize: "80px",
},
[theme.breakpoints.up("lg")]: {
  fontSize: "95px",
},
[theme.breakpoints.up("xl")]: {
  fontSize: "98px",
},
}))
