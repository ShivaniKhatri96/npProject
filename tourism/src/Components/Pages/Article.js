import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Art, Grid1, Grid2, Typo } from "../../styles/ArticleStyle";
const Article = () => {
  //getting data for (one) article from database
  const [one, setOne] = useState([]);
  useEffect(() => {
    const url =
      "https://np-project-33535-default-rtdb.europe-west1.firebasedatabase.app/article/learn.json";
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setOne(data);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, []);
  console.log(one);
  return (
    <div>
      <Grid1 container spacing={2}>
        <Grid item xs={12} md={8} lg={7} xl={6}>
          <Card>
            <Grid2 container>
              <Grid item xs={11}>
                <Art component="img" image={process.env.PUBLIC_URL + one.img} />
                <Typo variant="h1" component="div" className="heading">
                  {one.name}
                </Typo>
                <CardContent>
                  {one.content}. {one.learnMore}
                </CardContent>
                <CardContent>{one.learnMore}</CardContent>
              </Grid>
            </Grid2>
          </Card>
        </Grid>
      </Grid1>
    </div>
  );
};
export default Article;
