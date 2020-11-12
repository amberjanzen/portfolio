import React from "react";
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import CaseStudy1 from "./work/casestudy1";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";

import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";

const Hi = makeStyles((theme) => ({
  root: {
    display: "flex",
    borderRadius: 10,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    margin: "-20px -20px -20px -40px",
    height: 300,
    display: "flex",
    flexDirection: "column",
  },
  details: {
    flexDirection: "column",

    display: "flex",
  },
  media: {
    padding: theme.spacing(14),

    height: 330,
    flex: "1 1 auto",
  },
  content: {
    flex: "1 1 auto",
    padding: "10px 10px 0 15px",
  },
  button: {
    backgroundColor: "#d29a45",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(31, 51, 54, .1)",
    color: "white",
    height: 48,
    padding: "10px",
  },
}));

export default function Research() {
  const classes = Hi();
  const theme = useTheme();
  return (
    <div id="phil">
      <div className="container">
        <div className="section-title">
          <h2>Case Studies</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
            dapibus leonec.
          </p>
        </div>
        <div className={classes.root}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Card className={classes.root} elevation={3}>
                {/* <Grid className={classes.paper}> */}
                <div className={classes.details}>
                  {/* <CardMedia
                      className={classes.media}
                      image="../img/portfolio/01-small.jpg"
                      title="Contemplative Reptile"
                    /> */}
                  <CardContent className={classes.content}>
                    <h3>Ready for the Red Line</h3>
                    <p>
                      In 2017, my team at Big Car Collaborative recieved funds
                      through Transit Drives Indy to participate in a creative
                      placemaking project awarded through Transportation For
                      America. The mission of this project was to activate Red
                      Line bust stations through art and creative placemaking. I
                      led a team in an extensive engagement process that later
                      informed the creation of wayfinding installations at three
                      Red Line Stations.
                    </p>
                    <br />
                    <Link to="/CaseStudy1" className={classes.button}>
                      {" "}
                      See Case Study
                    </Link>
                  </CardContent>
                </div>
                {/* </Grid> */}
                <CardMedia
                  className={classes.media}
                  image="../img/portfolio/redline.jpg"
                  title="Contemplative Reptile"
                />
              </Card>
            </Grid>
            <Grid item xs={12}>
              <Card className={classes.root} elevation={3}>
                {/* <Grid className={classes.paper}> */}
                <div className={classes.details}>
                  {/* <CardMedia
                      className={classes.media}
                      image="../img/portfolio/01-small.jpg"
                      title="Contemplative Reptile"
                    /> */}
                  <CardContent className={classes.content}>
                    <h3>Noblesville Comprehensive Plan</h3>
                    <p>
                      In 2017, my team at Big Car Collaborative recieved funds
                      through Transit Drives Indy to participate in a creative
                      placemaking project awarded through Transportation For
                      America. The mission of this project was to activate Red
                      Line bust stations through art and creative placemaking. I
                      led a team in an extensive engagement process that later
                      informed the creation of wayfinding installations at three
                      Red Line Stations.
                    </p>
                    <br />
                    <Link to="/CaseStudy1" className={classes.button}>
                      {" "}
                      See Case Study
                    </Link>
                  </CardContent>
                </div>
                {/* </Grid> */}
                <CardMedia
                  className={classes.media}
                  image="../img/portfolio/Noblesville_builtform_2020.PNG"
                  title="Contemplative Reptile"
                />
              </Card>
            </Grid>
            <Grid item xs={12}>
              <Card className={classes.root} elevation={3}>
                {/* <Grid className={classes.paper}> */}
                <div className={classes.details}>
                  {/* <CardMedia
                      className={classes.media}
                      image="../img/portfolio/01-small.jpg"
                      title="Contemplative Reptile"
                    /> */}
                  <CardContent className={classes.content}>
                    <h3>Lockerbie Public Space</h3>
                    <p>
                      In 2017, my team at Big Car Collaborative recieved funds
                      through Transit Drives Indy to participate in a creative
                      placemaking project awarded through Transportation For
                      America. The mission of this project was to activate Red
                      Line bust stations through art and creative placemaking. I
                      led a team in an extensive engagement process that later
                      informed the creation of wayfinding installations at three
                      Red Line Stations.
                    </p>
                    <br />
                    <Link to="/CaseStudy1" className={classes.button}>
                      {" "}
                      See Case Study
                    </Link>
                  </CardContent>
                </div>
                {/* </Grid> */}
                <CardMedia
                  className={classes.media}
                  image="../img/portfolio/IMG_0010.jpg"
                  title="Contemplative Reptile"
                />
              </Card>
            </Grid>
            <Grid item xs={12}>
              <Card className={classes.root} elevation={3}>
                {/* <Grid className={classes.paper}> */}
                <div className={classes.details}>
                  {/* <CardMedia
                      className={classes.media}
                      image="../img/portfolio/01-small.jpg"
                      title="Contemplative Reptile"
                    /> */}
                  <CardContent className={classes.content}>
                    <h3>Morgan County Comprehensive Plan</h3>
                    <p>
                      In 2017, my team at Big Car Collaborative recieved funds
                      through Transit Drives Indy to participate in a creative
                      placemaking project awarded through Transportation For
                      America. The mission of this project was to activate Red
                      Line bust stations through art and creative placemaking. I
                      led a team in an extensive engagement process that later
                      informed the creation of wayfinding installations at three
                      Red Line Stations.
                    </p>
                    <br />
                    <Link to="/CaseStudy1" className={classes.button}>
                      {" "}
                      See Case Study
                    </Link>
                  </CardContent>
                </div>
                {/* </Grid> */}
                <CardMedia
                  className={classes.media}
                  image="../img/portfolio/01-small.jpg"
                  title="Contemplative Reptile"
                />
              </Card>
            </Grid>

            {/* <Grid item xs={6}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid> */}
          </Grid>
        </div>
      </div>
    </div>
  );
}
