import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import { useState, useContext } from "react";
import {
  ItemImage,
  ItemText,
  Divr1,
  Divr2,
  Btn,
  InputBox,
} from "../../styles/ConnectStyle";
import { InputLabel } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import { useNavigate } from "react-router";
import AuthKey from "../store/authKey";
const Connect = () => {
  let navigate = useNavigate();
  const authCtx = useContext(AuthKey);
  const [newUser, setNewUser] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    setNewUser({ ...newUser, [name]: value });
  };
  // const [user, setUser] = useState({
  //   email1: "",
  //   password1: "",
  // });
  // const handleLogInputs = (e) => {
  //   name = e.target.name;
  //   value = e.target.value;
  //   setUser({ ...user, [name]: value });
  // };
  //false when only log in page is shown
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const signUpHandler = (e) => {
    e.preventDefault();
    setOpen(true);
  };
  const logInHandler = (e) => {
    e.preventDefault();
    setOpen(false);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    // console.log(newUser);
    // console.log(user);
    //add validation later
    // setIsLoading(true);
    // for login
    if (open === false) {
      // const { email1, password1 } = user;

      const { email, password } = newUser;
      fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCD6qrdPVDp7h9pNBqDaV0h28tKa0Ovok4",
        {
          method: "POST",
          body: JSON.stringify({
            email,
            password,
            // email: email1,
            // password: password1,
            returnSecureToken: true,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((res) => {
          if (res.ok) {
            // setIsLoading(false);
            console.log("Successfully logged in");
            navigate("/");
            return res.json();
          } else {
            console.log("log in unsuccessful");
          }
        })
        .then((data) => {
          // console.log(data);
          authCtx.login(data.idToken);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      // for sign up

      // const postData = async (e) => {
      //   e.preventDefault();

      //   const res = await
      // }
      const { username, email, password } = newUser;
      fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCD6qrdPVDp7h9pNBqDaV0h28tKa0Ovok4",
        {
          method: "POST",
          body: JSON.stringify({
            displayName: username,
            email,
            password,
            returnSecureToken: true,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      ).then((res) => {
        if (res.ok) {
          // setIsLoading(false);
          console.log("Successful Registration");
          setOpen(false);
          return res.json();
        } else {
          console.log("invalid Registration");
        }
      });
      // .then((data) => {
      //   authCtx.login(data.idToken);
      //  })
    }
  };
  return (
    <Card
      sx={{
        minWidth: 275,
        marginTop: {
          xs: "135px",
          sm: "100px",
          lg: "100px",
        },
        marginBottom: {
          // xs: "20px",
          sm: "30px",
          lg: "50px",
        },
        marginX: {
          xs: "auto",
          sm: "16%",
          // sm: "130px",
          md: "20%",
          // md: "200px",
          lg: "25%",
          // lg: "300px",
          xl: "32%",
          // xl: "600px",
        },
        backgroundColor: "#FFF9F9",
      }}
      elevation={3}
    >
      <CardContent>
        <Grid container sx={{ mx: "auto", my: "3" }}>
          <Grid item xs={12}>
            <ItemImage>
              <ItemText elevation={0}>
                <Typography
                  className="satisfy"
                  sx={{
                    fontSize: { xs: "2rem", sm: "2.8rem", xl: "3.8rem" },
                    fontWeight: "bold",
                  }}
                >
                  Travel To Nepal
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: "0.85rem", sm: "1.2rem", xl: "1.5rem" },
                    fontWeight: "bold",
                  }}
                >
                  Learn, share and travel
                </Typography>
              </ItemText>
            </ItemImage>
          </Grid>

          {open === false && (
            <Grid item xs={6}>
              <Divr2 sx={{ mt: 1, mb: 1, mr: 0.5 }} />
              <Button
                sx={{
                  color: "#8a9ea1",
                  fontWeight: "bold",
                  fontSize: {xs:"0.8rem",sm:"1rem", lg:"1.1rem", xl:"1.2rem"},
                  textAlign: "Center",
                  mx: "auto",
                  width: "100%",
                }}
                onClick={signUpHandler}
              >
                SIGN UP
              </Button>
            </Grid>
          )}
          {open === true && (
            <Grid item xs={6}>
              <Divr1 sx={{ mt: 1, mb: 1, mr: 0.5 }} />
              <Button
                sx={{
                  color: "#0396A6",
                  fontWeight: "bold",
                  fontSize: {xs:"1rem",sm:"1.2rem",lg:"1.3rem", xl:"1.4rem"},
                  mx: "auto",
                  width: "100%",
                }}
                onClick={signUpHandler}
              >
                SIGN UP
              </Button>
            </Grid>
          )}
          {open === false && (
            <Grid item xs={6}>
              <Divr1 sx={{ mt: 1, mb: 1, ml: 0.5 }} />
              <Button
                sx={{
                  color: "#0396A6",
                  fontWeight: "bold",
                  fontSize: {xs:"1rem",sm:"1.2rem", lg:"1.3rem", xl:"1.4rem"},
                  mx: "auto",
                  width: "100%",
                }}
                onClick={logInHandler}
              >
                LOG IN
              </Button>
            </Grid>
          )}
          {open === true && (
            <Grid item xs={6}>
              <Divr2 sx={{ mt: 1, mb: 1, ml: 0.5 }} />
              <Button
                sx={{
                  color: "#8a9ea1",
                  fontWeight: "bold",
                  fontSize: {xs:"0.8rem",sm:"1rem", lg:"1.1rem", xl:"1.2rem"},
                  textAlign: "Center",
                  mx: "auto",
                  width: "100%",
                }}
                onClick={logInHandler}
              >
                LOG IN
              </Button>
            </Grid>
          )}
          {/* form starts here */}
          {/* login */}
          {open === false && (
            <Grid
              item
              xs={12}
              component="form"
              sx={{
                mx: "auto",
              }}
              onSubmit={submitHandler}
              autoComplete="off"
            >
              {/* <Grid sx={{ my: 3 }}>
                <InputLabel htmlFor="component-outlined" sx={{ mb: 1 }}>
                  Name
                </InputLabel>
                <InputBox placeholder="Enter your full name" focused />
              </Grid> */}
              <Grid sx={{ mb: 3 }}>
                <InputLabel htmlFor="component-outlined" sx={{ mb: 1 }}>
                  Email
                </InputLabel>
                <InputBox
                  type="email"
                  placeholder="Enter your email address"
                  name="email"
                  value={newUser.email}
                  onChange={handleInputs}
                  // name="email1"
                  // value={user.email1}
                  // onChange={handleLogInputs}
                  focused
                  required
                />
              </Grid>

              <Grid sx={{ mb: 3 }}>
                <InputLabel htmlFor="component-outlined" sx={{ mb: 1 }}>
                  Password
                </InputLabel>
                <InputBox
                  type="password"
                  placeholder="Enter your password"
                  // name="password1"
                  // value={user.password1}
                  // onChange={handleLogInputs}
                  name="password"
                  value={newUser.password}
                  onChange={handleInputs}
                  required
                />
              </Grid>
              <Grid sx={{ mb: 3 }}>
                <Btn variant="contained" color="fifth" type="submit">
                  Log In
                </Btn>
              </Grid>
            </Grid>
          )}
          {/* signup */}
          {open === true && (
            <Grid
              item
              xs={12}
              component="form"
              onSubmit={submitHandler}
              sx={{
                mx: "auto",
              }}
              autoComplete="off"
            >
              <Grid sx={{ my: 3 }}>
                <InputLabel htmlFor="component-outlined" sx={{ mb: 1 }}>
                  Name
                </InputLabel>
                <InputBox
                  placeholder="Enter your full name"
                  focused
                  name="username"
                  value={newUser.username}
                  onChange={handleInputs}
                  required
                />
              </Grid>

              <Grid sx={{ mb: 3 }}>
                <InputLabel htmlFor="component-outlined" sx={{ mb: 1 }}>
                  Email
                </InputLabel>
                <InputBox
                  type="email"
                  placeholder="Enter your email address"
                  name="email"
                  value={newUser.email}
                  onChange={handleInputs}
                  required
                />
              </Grid>

              <Grid sx={{ mb: 3 }}>
                <InputLabel htmlFor="component-outlined" sx={{ mb: 1 }}>
                  Password
                </InputLabel>
                <InputBox
                  type="password"
                  placeholder="Type to create a password"
                  name="password"
                  required
                  value={newUser.password}
                  onChange={handleInputs}
                />
              </Grid>

              <Grid sx={{ mb: 3 }}>
                <InputLabel htmlFor="component-outlined" sx={{ mb: 1 }}>
                  Confirm Password
                </InputLabel>
                <InputBox
                  type="password"
                  placeholder="Enter your password again"
                  name="confirmPassword"
                  value={newUser.confirmPassword}
                  onChange={handleInputs}
                />
              </Grid>
              <Grid sx={{ mb: 3 }}>
                <Btn variant="contained" color="fifth" type="submit">
                  Sign Up
                </Btn>
              </Grid>
            </Grid>
          )}
        </Grid>
      </CardContent>
    </Card>
  );
};
export default Connect;
