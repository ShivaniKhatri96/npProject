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
import { useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router";
import { useContext } from "react";
import AuthKey from "../store/authKey";
import Button from "@mui/material/Button";
const Header = () => {
  let navigate = useNavigate();
  const authCtx = useContext(AuthKey);
  const isLoggedIn = authCtx.isLoggedIn;
  const logoutHandler = () => {
    authCtx.logout();
  };
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const imgHandler = () => {
    navigate("./home");
  };
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    width: "100%",
    [theme.breakpoints.up("xs")]: {
      margin: theme.spacing(1.5, 0, 1.5, 0),
      width: "auto",
    }
  }));
  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 4),
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
      paddingLeft: `calc(1em + ${theme.spacing(6)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("lg")]: {
        width: "15ch",
        // width: "35ch",
      },
      [theme.breakpoints.up("xl")]: {
        width: "35ch",
      },
      marginTop: theme.spacing(0.5),
    },
  }));

  return (
    <AppBar elevation={1} sx={{ backgroundColor: "#03588C" }}>
      <Toolbar>
        {/* spacing={1} */}
        <Grid container>
          <Grid item lg={0.5} xl={0.5} />
          <Grid item xs={8} sm={4} lg={2.5} xl={2.5} order={1}>
            {/* logo and search*/}
            <img
              src={require("../Pictures/logo.png")}
              height="60px"
              width="200px"
              alt="Logo of the website"
              style={{ cursor: "pointer" }}
              onClick={imgHandler}
            />
          </Grid>

          <Grid
          item
            xs={3}
            sm={4}
            sx={{
              display: { xs: "flex", lg: "none" },
              alignItems: "center",
              justifyContent: "end",
            }}
            order={{xs:2, sm:3}}
          >
            {/* dropdown hamburgermenu */}

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
              // order={{xs:2,sm:3}}
            >
              <MenuSharpIcon />
            </Badge>

            {/* dropdown list */}
            {/* before logging in */}

            <Menu
              id="drop-down-badge"
              aria-labelledby="drop-down-badge"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              transformOrigin={{ vertical: "top", horizontal: "right" }}
              sx={{ display: { xs: "flex", lg: "none" } }}
            >
              {!isLoggedIn && (
                <Link
                  to="/connect"
                  style={{
                    textDecoration: "none",
                    color: "#000000",
                    cursor: "pointer",
                  }}
                >
                  <MenuItem onClick={handleClose}>
                    <LoginIcon />
                    &nbsp; Connect
                  </MenuItem>
                </Link>
              )}
              {isLoggedIn && (
                <Link
                  to="/profile"
                  style={{
                    textDecoration: "none",
                    color: "#000000",
                    cursor: "pointer",
                  }}
                >
                  <MenuItem onClick={handleClose}>
                    <AccountCircleIcon />
                    &nbsp; Profile
                  </MenuItem>
                </Link>
              )}
              {isLoggedIn && (
                <Link
                  to="/dashboard"
                  style={{
                    textDecoration: "none",
                    color: "#000000",
                    cursor: "pointer",
                  }}
                >
                  <MenuItem onClick={handleClose}>
                    <GroupsIcon />
                    &nbsp; Community
                  </MenuItem>
                </Link>
              )}
              {isLoggedIn && (
                <Link
                  to="/travelinfo"
                  style={{
                    textDecoration: "none",
                    color: "#000000",
                    cursor: "pointer",
                  }}
                >
                  <MenuItem onClick={handleClose}>
                    <TravelExploreIcon />
                    &nbsp; Travel Details
                  </MenuItem>
                </Link>
              )}
              {isLoggedIn && (
                <Link
                  to="#"
                  style={{
                    textDecoration: "none",
                    color: "#000000",
                    cursor: "pointer",
                  }}
                >
                  <MenuItem onClick={handleClose}>
                    <Badge
                      sx={{
                        display: { xs: "flex", lg: "none" },
                      }}
                      // badgeContent={1}
                      color="secondary"
                    >
                      <NotificationsIcon />
                    </Badge>
                    &nbsp; Notifications
                  </MenuItem>
                </Link>
              )}
              {isLoggedIn && (
                <Link
                  to="/settings"
                  style={{
                    textDecoration: "none",
                    color: "#000000",
                    cursor: "pointer",
                  }}
                >
                  <MenuItem onClick={handleClose}>
                    <SettingsIcon />
                    &nbsp; Settings
                  </MenuItem>
                </Link>
              )}
              {isLoggedIn && (
                <MenuItem
                  onClick={() => {
                    handleClose();
                    logoutHandler();
                  }}
                >
                  <LogoutIcon />
                  &nbsp; Log out
                </MenuItem>
              )}
            </Menu>
          </Grid>
          <Grid item  lg={1.5} xl={1.5} />
          <Grid
            item
            xs={12}
            sm={4}
            lg={3}
            xl={3}
            sx={{
              display: "flex" ,
              justifyContent: "center",
            }}
            order={{xs:3, sm:2}}
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
          {!isLoggedIn && (
            <Grid
              item
              xs={12}
              lg={3.5}
              xl={3.5}
              sx={{
                display: { xs: "none", lg: "flex" },
                justifyContent: "end",
              }}
              order={{lg:3}}
            >
              {/* before logging in */}
              {!isLoggedIn && (
                <Link
                  to="/connect"
                  style={{
                    textDecoration: "none",
                    cursor: "pointer",
                    color: "white",
                    display: "flex",
                    alignSelf: "center",
                  }}
                >
                  <MenuItem>
                    <LoginIcon />
                    &nbsp; Connect
                  </MenuItem>
                </Link>
              )}
            </Grid>
          )}
          <Grid item lg={0.5} xl={0.5} />
          {/* from large screens */}
          <Grid
            item
            xs={12}
            lg={3.5}
            xl={3.5}
            sx={{
              display: { xs: "none", lg: "flex" },
              justifyContent: "space-around",
            }}
            order={{lg:3}}
            // sx={{ display: "flex", justifyContent: "space-around" }}
          >
            {/* profile page */}
            {isLoggedIn && (
              <Link
                to="/profile"
                style={{
                  textDecoration: "none",
                  cursor: "pointer",
                  color: "white",
                  display: "flex",
                  alignSelf: "center",
                }}
              >
                Profile
              </Link>
            )}
            {/* Community page/dashboard */}
            {isLoggedIn && (
              <Link
                to="/dashboard"
                style={{
                  textDecoration: "none",
                  cursor: "pointer",
                  color: "white",
                  display: "flex",
                  alignSelf: "center",
                }}
              >
                Community
              </Link>
            )}
            {isLoggedIn && (
              <Link
                to="/travelinfo"
                style={{
                  textDecoration: "none",
                  cursor: "pointer",
                  color: "white",
                  display: "flex",
                  alignSelf: "center",
                }}
              >
                Travel Details
              </Link>
            )}
            {isLoggedIn && (
              <Badge
                sx={{
                  marginTop: { lg: "20px", xl: "18px" },
                  cursor: "pointer",
                }}
                badgeContent={1}
                color="secondary"
              >
                <NotificationsIcon />
              </Badge>
            )}
            {/* after logging in */}
            {/* dropdown */}
            {isLoggedIn && (
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
                <ArrowDropDownCircleIcon />
              </Badge>
            )}

            {/* dropdown list */}
            {isLoggedIn && (
              <Menu
                id="drop-down-badge"
                aria-labelledby="drop-down-badge"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                transformOrigin={{ vertical: "top", horizontal: "right" }}
                sx={{ display: { xs: "none", md: "flex" } }}
              >
                <Link
                  to="/settings"
                  style={{ textDecoration: "none", color: "#000000" }}
                >
                  <MenuItem onClick={handleClose}>
                    <SettingsIcon />
                    &nbsp; Settings
                  </MenuItem>
                </Link>
                <MenuItem
                  onClick={() => {
                    handleClose();
                    logoutHandler();
                  }}
                >
                  <LogoutIcon />
                  &nbsp; Log out
                </MenuItem>
              </Menu>
            )}
          </Grid>
          <Grid item lg={0.5} xl={0.5} />
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
export default Header;
