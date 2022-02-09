import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
// import Mountain from "../Components/Pictures/mountain.jpg";
import Divider from "@mui/material/Divider";
import { Button, TextField } from "@mui/material";
// { theme }
const img = process.env.PUBLIC_URL + "/Pictures/mountain.jpg";
export const ItemImage = styled(Paper)(({ theme }) => ({
  backgroundImage: `url(${img})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  opacity: "0.8",
  [theme.breakpoints.up("xs")]: {
    height: "175px",
  },
  [theme.breakpoints.up("sm")]: {
    height: "220px",
  },
  [theme.breakpoints.up("lg")]: {
    height: "250px",
  },
  [theme.breakpoints.up("xl")]: {
    height: "275px",
  },
}));

export const ItemText = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  backgroundColor: "transparent",
  
  [theme.breakpoints.up("xs")]: {
   paddingTop: theme.spacing(10),
  },
  [theme.breakpoints.up("sm")]: {
    paddingTop: theme.spacing(11),
  },
  [theme.breakpoints.up("lg")]: {
    paddingTop: theme.spacing(14),
  },
  //   height: "30vh",
  textAlign: "center",
  fontWeight: "bold",
  fontSize: "30px",
}));

export const Divr1 = styled(Divider)(({theme}) => ({
  background: "#0396A6",
  // height:"10px",
  [theme.breakpoints.up("xs")]: {
    height:"6px",
  },
  [theme.breakpoints.up("sm")]: {
    height:"8px",
  },
  [theme.breakpoints.up("lg")]: {
    height:"9px",
  },
  [theme.breakpoints.up("xl")]: {
    height:"10px",
  },
}));
export const Divr2 = styled(Divider)(({theme}) => ({
  background: "#4a98a1",
  [theme.breakpoints.up("xs")]: {
    height:"3.5px",
  },
  [theme.breakpoints.up("sm")]: {
    height:"4.2px",
  },
  [theme.breakpoints.up("lg")]: {
    height:"4.5px",
  },
  [theme.breakpoints.up("xl")]: {
    height:"5px",
  },
  boxShadow: "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;"
}));
export const InputBox = styled(TextField)`
width: 100%;
`
// export const InputBox = styled(TextField)(() => ({
//   width: "100%",
//   }));

export const Btn = styled(Button)`
width: 100%;
height: 7ch;
color: #ffffff;
font-weight: bold;
boxShadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
&:hover {
  background-color: #f07346;
}
// &:focus {
//   background-color: #F25C5C;
// }
`
;