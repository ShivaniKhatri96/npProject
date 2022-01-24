import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  IconButton,
  Button,
  Badge,
  MenuItem,
  Menu,
  InputBase,
} from "@mui/material";
import MenuSharpIcon from "@mui/icons-material/MenuSharp";
import { Box } from "@mui/system";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import GroupsIcon from "@mui/icons-material/Groups";
import ArrowDropDownCircleIcon from "@mui/icons-material/ArrowDropDownCircle";
import SearchIcon from "@mui/icons-material/Search";
import SettingsIcon from "@mui/icons-material/Settings";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import LogoutIcon from "@mui/icons-material/Logout";
import LoginIcon from "@mui/icons-material/Login";
import BadgeIcon from "@mui/icons-material/Badge";
import { useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
// import {createTheme} from "@mui/material/styles";
// import { ThemeProvider } from '@mui/private-theming';

// const theme = createTheme({
//     palette: {
//         primary: {
//             main:"#03588C",
//         },
//         secondary: {
//             main:"#F25C5C",
//         }
//     }
// })
const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    margin: theme.spacing(1.2, 2, 1.2, 0),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  }));
  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding and font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "25ch",
      },
      marginTop: theme.spacing(0.5),
    },
  }));

  return (
    <AppBar elevation={1} sx={{ backgroundColor: "#03588C" }}>
      <Toolbar>
        <Grid container spacing={2}>
          <Grid item xs={1.25}>
            {/* logo and search*/}
            <img
              src={require("../Pictures/logo.png")}
              height="60px"
              width="200px"
              alt="Logo of the website"
            />
            {/* <IconButton sx={{ color: "white" }}><MenuSharpIcon /></IconButton> */}
            {/* <IconButton sx={{ color: "white" }}>
              <SearchIcon />
            </IconButton> */}
          </Grid>
          <Grid item xs={2.15}>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search..."
                inputProps={{ "aria-label": "search" }}
              ></StyledInputBase>
            </Search>
          </Grid>
          <Grid item xs={1.95}></Grid>
          <Grid item xs={4}>
            <IconButton
              sx={{ marginRight: "60px", cursor: "pointer", color: "white", marginTop:"10px" }}
            >
              <HomeIcon />
            </IconButton>
            <IconButton
              sx={{ marginRight: "60px", cursor: "pointer", color: "white", marginTop:"10px" }}
            >
              <GroupsIcon />
            </IconButton>
            <IconButton
              sx={{ marginRight: "60px", cursor: "pointer", color: "white", marginTop:"10px" }}
            >
              <AccountCircleIcon />
            </IconButton>
          </Grid>
          <Grid item xs={1.65}></Grid>
          <Grid item xs={1}>
            {/* button Links */}
            <Badge
              sx={{ marginTop: "16px", marginLeft:"35px" , marginRight: "25px", cursor: "pointer" }}
              badgeContent={1}
              color="secondary"
            >
              <NotificationsIcon />
            </Badge>
            <Badge
              sx={{ marginTop: "16px", cursor: "pointer" }}
              id="drop-down-badge"
              aria-controls={open ? "drop-down-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              <ArrowDropDownCircleIcon />
            </Badge>
            {/* dropdown list */}
            <Menu
              id="drop-down-badge"
              aria-labelledby="drop-down-badge"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              //   anchorOrigin={{ vertical: "top", horizontal: "left" }}
              //   transformOrigin={{ vertical: "top", horizontal: "left" }}
            >
              {/* before logging in */}
              <MenuItem onClick={handleClose}>
                <LoginIcon />
                &nbsp; Log in
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <BadgeIcon />
                &nbsp; Sign up
              </MenuItem>
              {/* After logging in  */}
              <MenuItem onClick={handleClose}>
                <TravelExploreIcon />
                &nbsp; Travel info
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <SettingsIcon />
                &nbsp; Settings
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <LogoutIcon />
                &nbsp; Log out
              </MenuItem>
            </Menu>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
export default Navbar;
