import * as React from "react";
import Grid from "@mui/material/Grid";
import myVideo from "../Videos/nepal.mp4";
import { Card, CardContent } from "@mui/material";
import { Welcome, DivrHome } from "../../styles/HomeStyle";
import Places from "../homeComponents/Places";
import Things from "../homeComponents/Things";
import Festivals from "../homeComponents/Festivals";
import Food from "../homeComponents/Food";
const Home = () => {
  //   {/* <Grid item xs={4}>
  // <Welcome elevation={0} className='satisfy'>Travel to Nepal <br />Experience rich culture <br /> & make a memory of lifetime </Welcome>
  //    </Grid>
  //    <Grid item xs={8}></Grid> */}
  return (
    <div>
      {/* bg video*/}

      <Card
        sx={{
          marginTop: { xs: "110px", sm: "50px",md:"30px", lg: "25px",xl: "-16px" },
          marginBottom: {sm:"30px",md:"20px",lg:"25px",xl:"25px"},
          // marginX: "100px",
          backgroundColor: "transparent",
        }}
        elevation={0}
      >
        <CardContent>
          <Grid container>
            <Grid item xs={0.5} sm={1} />
            <Grid item xs={11} sm={10}>
              {/* style={{width: "100%", height:"100%"}} */}
              <video
                controls
                loop
                autoPlay
                muted
                style={{
                  width: "100%",
                  minHeight: "130%",
                  opacity: "0.80",
                  overflow: "hidden",
                }}
              >
                <source src={myVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </Grid>
            <Grid item  xs={0.5} sm={1} />
          </Grid>
        </CardContent>
      </Card>

      {/*travel to nepal...*/}

      <Grid container spacing={3}>
        <Grid item xs={1} />
        <Grid item xs={10}>
          <DivrHome />
          <Grid item xs={12}>
            <Welcome elevation={0} className="satisfy">
              Travel to Nepal <br />
              Experience rich culture & make a memory of lifetime
            </Welcome>
          </Grid>
          <DivrHome />
        </Grid>
        <Grid item xs={1} />
      </Grid>
      {/* Places to go */}
      <Places />
      <Things />
      <Festivals />
      <Food />
    </div>
  );
};
export default Home;
