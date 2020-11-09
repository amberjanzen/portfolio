import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const Hi = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "left",
    color: theme.palette.text.secondary,
    margin: "1px -15px 0 -40px",
  },
}));

export default function Philosophy() {
  const classes = Hi();

  return (
    <div id="phil">
      <div className="container">
        <div className="section-title">
          <h2>Philosophy</h2>
          <h3>
          "In such a technologically reconfigured and geometrised
world, we very easily fall into a perception of space and time in themselves as abstract categories,
detached from the flux of experiences and ready to hand for the construction of yet more detached
representations" - Andrew Pickering

          
          </h3>
        </div>
        <div className={classes.root}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Grid className={classes.paper}>
                <div class="phil-box skill-img-1">
                  <h3>Human Centered Design</h3>
                  <p>
                    A simple app showcasing Studio Ghibli films designed with
                    JavaScript, HTML, and CSS through the Ghibli
                    APIsefafreagragraghreagegargarg
                  </p>
                </div>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Grid className={classes.paper}>
                <div class="phil-box skill-img-1">
                  <h3>Storytelling</h3>
                  <p>
                    A simple app showcasing Studio Ghibli films designed with
                    JavaScript, HTML, and CSS through the Ghibli
                    APIsefafreagragraghreagegargarg
                  </p>
                </div>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Grid className={classes.paper}>
                <div class="phil-box skill-img-1">
                  <h3>Empathy</h3>
                  <p>
                    A simple app showcasing Studio Ghibli films designed with
                    JavaScript, HTML, and CSS through the Ghibli
                    APIsefafreagragraghreagegargarg
                  </p>
                </div>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Grid className={classes.paper}>
                <div class="phil-box skill-img-1">
                  <h3>Collaboration</h3>
                  <p>
                    A simple app showcasing Studio Ghibli films designed with
                    JavaScript, HTML, and CSS through the Ghibli
                    APIsefafreagragraghreagegargarg
                  </p>
                </div>
              </Grid>
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
