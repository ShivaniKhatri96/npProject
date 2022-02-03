import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { Divider } from "@mui/material";

export const Welcome = styled(Paper)
(({theme}) => ({
  textAlign: "center",
  backgroundColor: "transparent",
  fontWeight: "bold",
  
  [theme.breakpoints.up("xs")]: {
    fontSize:  "1.4rem",
    margin: "10px 0 10px 0",
  },
  [theme.breakpoints.up("sm")]: {
    fontSize:  "1.7rem",
    margin: "12px 0 12px 0",
  },
  [theme.breakpoints.up("md")]: {
    fontSize:  "2.1rem",
    margin: "12px 0 12px 0",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize:  "2.4rem",
    margin: "14px 0 14px 0",
  },
  [theme.breakpoints.up("xl")]: {
    fontSize:  "2.6rem",
    // fontSize:  "2.8rem",
    margin: "15px 0 15px 0",
  },
}));

export const DivrHome = styled(Divider)(({theme}) => ({
  background: "#048FAD",
  [theme.breakpoints.up("xs")]: {
    height: "2px",
    margin: "10px 0 10px 0",
  },
  [theme.breakpoints.up("sm")]: {
    height: "3px",
    margin: "12px 0 12px 0",
  },
  [theme.breakpoints.up("md")]: {
    height: "4px",
    margin: "12px 0 12px 0",
  },
  [theme.breakpoints.up("lg")]: {
    height: "4.5px",
    margin: "14px 0 14px 0",
  },
  [theme.breakpoints.up("xl")]: {
    height: "5px",
    margin: "15px 0 15px 0",
  },
}));
// `
//   background: #048FAD;
//   height: 5px;
// `;
