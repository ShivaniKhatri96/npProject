import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Art, Grid1, Grid2, Typo } from "../../styles/ArticleStyle";
import {useEffect } from "react";
const Article = (props) => {
  const article = localStorage.getItem('article');
  const art = JSON.parse(article);
  //starts the page at the top instead of bottom
  useEffect (() => {
    window.scrollTo(0,0)
  },[])
  return (
    <div>
      <Grid1 container spacing={2}>
        <Grid item xs={12} md={8} lg={7} xl={6}>
          <Card>
            <Grid2 container>
              <Grid item xs={11}>
                <Art component="img" image={process.env.PUBLIC_URL +  art.img} />
                <Typo variant="h1" component="div" className="heading">
                  {art.name}
                </Typo>
                <CardContent>
                  {art.content}. {art.description}
                </CardContent>
                <CardContent>{art.description}</CardContent>
              </Grid>
            </Grid2>
          </Card>
        </Grid>
      </Grid1>
    </div>
  );
};
export default Article;
