import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';
import DynamicScrollToTop from "../DynamicScrollToTop"

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexGrow:1,
  

    alignItems: 'center'

  },
  paper: {
    width: "200"

  },
  img: {
 
    margin: 'auto',
  display: 'flex',

    maxWidth: '100%',
    maxHeight: '100%',
  },

}));

export default function CaseStudy1(){
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();

  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
};

    return (
      <div>
<DynamicScrollToTop />
      <div id="experience" >
        <div className="container">
          <div className="section-title">
            <h2>Ready For the Red Line</h2>
            <p>
            In 2017,  my team at Big Car Collaborative recieved funds through Transit Drives Indy to participate in a creative placemaking project awarded through Transportation For America. The mission of this project was to activate Red Line bust stations through art and creative placemaking.  I led a team in an extensive engagement process that later informed the creation of wayfinding installations at three Red Line Stations.  
            </p>
          </div>
          <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={6} md={3}
        >
     
          <img className={classes.img} alt="" src=""></img>
     
        </Grid>
        <Grid item xs={6} md={3}
        >
          <Paper className={classes.paper}>
          <img className={classes.img} alt="" src=""></img>
          </Paper>
        </Grid>
        <Grid item xs={6} md={3}
        >
          <Paper className={classes.paper}>
          <img className={classes.img} alt="" src=""></img>
          </Paper>
        </Grid>
        <Grid item xs={6} md={3}
        >
          <Paper className={classes.paper}>
          <img className={classes.img} alt="img" src="../../img/portfolio/redline.jpg"></img>
          </Paper>
        </Grid>

      </Grid>
    </div>

          </div>
        </div>
        <div id="phil">
        <div className="container">
          <div className="section-title">
            <h2>Objective</h2>
            <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
            <p>
            To understand what residents wanted to know about the incoming rapid transit system and what locations along the route that were important to the Neighborhood. 
            </p>
            </Grid>
            <Grid item xs={12} md={6}>
            <p>
            To understand what residents wanted to know about the incoming rapid transit system and what locations along the route that were important to the Neighborhood. 
            </p>
            </Grid>
            </Grid>
            <br></br>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <h2>Methodology</h2>
            <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
            <p>
            I designed and organized survey distribution and community focus groups to gather a consensus of what would be most helpful to users in navigating the neighborhood. 
I organized and managed creative programming to draw out community members to participate in on-site surveys. This included a movie night at a local grocery store, an art market at University of Indy, and focus group at a local art center. 
            </p>
            
            </Grid>
            <Grid item xs={12} md={6}>

            <img className={classes.img} alt="img" src="../../img/portfolio/redline2.PNG"></img>
            </Grid>
            </Grid>
          </div>
          </div>
        </div>
     
        <div id="experience">
        <div className="container">
          <div className="section-title">
            <h2>Outcome</h2>
            <Grid container spacing={4}>
            <p>
            Feedback from the community translated into three wayfinding kiosk designs built by a local Indianapolis Artist.
Each kiosk includes a map of the area highlighting local attractions, diagrams of what the Red Line stops will look like, informative pamphlets about the IndyGo transit system, and other interactive features.
 
            </p>
            </Grid>
          </div>
          </div>
        </div>
      </div>
    );
  
}

