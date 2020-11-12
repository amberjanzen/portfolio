import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",

    alignItems: "center",
  },
  paper: {
    width: "200",
  },
  img: {
    margin: "auto",
    display: "flex",
    flexShrink: 1,

    maxWidth: "100%",
    maxHeight: "inherit",
    paddingBottom: "500",
  },
}));

export default function Approach() {
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();

  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };

    return (
        <div id="experience">
        <div className="container">
        <div className="section-title">
          <h2>Why Me?</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
            dapibus leonec.
          </p>
        </div>
        <div className={classes.root}>
          <Grid container spacing={1}>
                <Grid item xs={12} md={3}>
                  <img
                    className={classes.img}
                    alt=""
                    src="../../img/portfolio/redline.jpg"
                  ></img>
                </Grid>
                <Grid item xs={12} md={3}>
                  <img
                    className={classes.img}
                    alt=""
                    src="../../img/portfolio/redline.jpg"
                  ></img>
                </Grid>
                <Grid item xs={12} md={3}>
                  <img
                    className={classes.img}
                    alt=""
                    src="../../img/portfolio/redline.jpg"
                  ></img>
                </Grid>
                <Grid item xs={12} md={3}>
                  <img
                    className={classes.img}
                    alt="img"
                    src="../../img/portfolio/redline.jpg"
                  ></img>
                </Grid>
              </Grid>
              </div>
        </div>
      </div>
    )
  
}

