import { styled } from "@mui/material/styles";
import { Divider } from "@mui/material";
import { Typography } from "@mui/material";
export const DivrFav = styled(Divider)(({ theme }) => ({
  background: "#048FAD",
  [theme.breakpoints.up("xs")]: {
    height: "3px",
    marginBottom: "3px",
  },
  [theme.breakpoints.up("sm")]: {
    height: "4px",
    marginBottom: "5px",
  },
  [theme.breakpoints.up("lg")]: {
    height: "5px",
    marginBottom: "8px",
  },
}));

export const Typo = styled(Typography)(({theme}) => ({
    [theme.breakpoints.up("xs")]: {
        fontSize: "30px"
      },
      [theme.breakpoints.up("sm")]: {
        fontSize: "35px"
      },
      [theme.breakpoints.up("md")]: {
        fontSize: "40px"
      },
      [theme.breakpoints.up("lg")]: {
        fontSize: "45px"
      },
}));