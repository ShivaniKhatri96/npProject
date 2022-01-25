import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  MenuItem,
  Menu,
  InputBase,
} from "@mui/material";
import MenuSharpIcon from "@mui/icons-material/MenuSharp";
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
// import theme from "../Breakpoints";
// import {createTheme} from "@mui/material/styles";

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
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      margin: theme.spacing(1, 2, 1, 0),
      marginLeft: theme.spacing(3),
      width: "auto",
    },
    [theme.breakpoints.up("lg")]: {
      margin: theme.spacing(1, 2, 1, 0),
      marginLeft: theme.spacing(1),
      width: "auto",
    },
    [theme.breakpoints.up("xl")]: {
      margin: theme.spacing(1, 2, 1, 0),
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
      [theme.breakpoints.up("lg")]: {
        width: "15ch",
      },
      [theme.breakpoints.up("xl")]: {
        width: "25ch",
      },
      marginTop: theme.spacing(0.5),
    },
  }));

  return (
    <AppBar elevation={1} sx={{ backgroundColor: "#03588C" }}>
      <Toolbar>
        <Grid container spacing={1}>
          <Grid item xs={10} sm={8} md={9} lg={2} xl={1.25}>
            {/* logo and search*/}
            <img
              src={require("../Pictures/logo.png")}
              height="60px"
              width="200px"
              alt="Logo of the website"
            />
          </Grid>
          <Grid xs={2} sx={{ display: { xs: "flex", sm: "none" } }}>
            <IconButton sx={{ color: "white", marginLeft: "15px" }}>
              <SearchIcon />
            </IconButton>
          </Grid>

          <Grid
            item
            sm={4}
            md={3}
            lg={2}
            xl={2.15}
            sx={{ display: { xs: "none", sm: "flex" } }}
          >
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

          <Grid item lg={0.5} xl={1.95}></Grid>

          <Grid
            item
            xs={12}
            lg={4}
            xl={1.5}
            sx={{ display: "flex", justifyContent: "space-around" }}
          >
            {/* home page */}
            <Link to="/">
              <IconButton
                sx={{
                  marginRight: { lg: "10px", xl: "80px" },
                  cursor: "pointer",
                  color: "white",
                  marginTop: { lg: "10px" },
                }}
              >
                <HomeIcon />
              </IconButton>
            </Link>

            {/* Community page/dashboard */}
            <Link to="/dashboard">
              <IconButton
                sx={{
                  marginRight: { lg: "10px", xl: "80px" },
                  cursor: "pointer",
                  color: "white",
                  marginTop: { lg: "10px" },
                }}
              >
                <GroupsIcon />
              </IconButton>
            </Link>

            {/* profile page */}
            <Link to="/profile">
              <IconButton
                sx={{
                  marginRight: { lg: "20px", xl: "80px" },
                  cursor: "pointer",
                  color: "white",
                  marginTop: { lg: "10px" },
                }}
              >
                <AccountCircleIcon />
              </IconButton>
            </Link>

            {/* only for screen less than lg */}
            {/* notifications */}
            <Badge
              sx={{
                marginTop: { xs: "6px" },
                cursor: "pointer",
                display: { xs: "flex", lg: "none" },
              }}
              badgeContent={1}
              color="secondary"
            >
              <NotificationsIcon />
            </Badge>
            {/* dropdown/hamburger menu */}
            <Badge
              sx={{
                marginTop: { xs: "6px" },
                cursor: "pointer",
                display: { xs: "flex", lg: "none" },
              }}
              id="drop-down-badge"
              aria-controls={open ? "drop-down-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              <MenuSharpIcon sx={{ display: { xs: "flex", lg: "none" } }} />
            </Badge>
          </Grid>

          {/* for large screens icons */}

          <Grid item lg={1} xl={3}></Grid>

          <Grid
            item
            lg={2}
            xl={2}
            sx={{ display: { xs: "none", lg: "flex" }, justifyContent: "end" }}
          >
            {/* button Links */}
            {/* notifications */}
            <Badge
              sx={{
                marginTop: { lg: "20px", xl: "18px" },
                // marginLeft: { lg:"35px" ,xl:"35px" },
                marginRight: { lg: "28px" },
                cursor: "pointer",
              }}
              badgeContent={1}
              color="secondary"
            >
              <NotificationsIcon />
            </Badge>
            {/* dropdown/hamburger menu */}
            <Badge
              sx={{
                marginTop: { lg: "20px", xl: "18px" },
                cursor: "pointer",
              }}
              id="drop-down-badge"
              aria-controls={open ? "drop-down-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              <ArrowDropDownCircleIcon
                sx={{ display: { xs: "none", lg: "flex" } }}
              />
            </Badge>
            {/* dropdown list */}
            <Menu
              id="drop-down-badge"
              aria-labelledby="drop-down-badge"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              // anchorOrigin={{ vertical: "top", horizontal: "left" }}
              // transformOrigin={{ vertical: "top", horizontal: "left" }}
            >
              {/* before logging in */}
              <Link to="/login" style={{textDecoration: "none", color: "#000000"}}>
                <MenuItem onClick={handleClose}>
                  <LoginIcon />
                  &nbsp; Log in
                </MenuItem>
              </Link>

              <Link to="/signup" style={{textDecoration: "none", color: "#000000"}}>
                <MenuItem onClick={handleClose}>
                  <BadgeIcon />
                  &nbsp; Sign up
                </MenuItem>
              </Link>
              {/* After logging in  */}
              <Link to="/travelinfo" style={{textDecoration: "none", color: "#000000"}}>
                <MenuItem onClick={handleClose}>
                  <TravelExploreIcon />
                  &nbsp; Travel info
                </MenuItem>
              </Link>

              <Link to="/settings" style={{textDecoration: "none", color: "#000000"}}>
                <MenuItem onClick={handleClose}>
                  <SettingsIcon />
                  &nbsp; Settings
                </MenuItem>
              </Link>

              <Link to="/login" style={{textDecoration: "none", color: "#000000"}}>
                <MenuItem onClick={handleClose}>
                  <LogoutIcon />
                  &nbsp; Log out
                </MenuItem>
              </Link>
            </Menu>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
export default Navbar;
