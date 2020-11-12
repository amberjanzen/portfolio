import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import FormLabel from "@material-ui/core/FormLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import Paper from "@material-ui/core/Paper";
import DynamicScrollToTop from "../DynamicScrollToTop";

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

export default function CaseStudy1() {
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();

  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };

  return (
    <div>
      <DynamicScrollToTop />
      <div id="caseStudy">
        <div className="container">
          <div className="section-title">
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <h2>Ready For the Red Line</h2>
                <p>
                  In partnership with Transit Drives Indy and the Arts Council
                  Of Indianapolis, Big Car Collaborative underwent a community
                  engagement process leading to the creation of wayfinding
                  kiosks along three southside RedLine transit stops. The
                  creation of these Kiosks contributed to the promotion of
                  public transit through art and placemaking around the newly
                  developed IndyGo Rapid Transit System. The design of each
                  Kiosk reflected the character of Indy's southside while
                  promoting the local businesses and institutions walkable to
                  and from each Redline Station.
                </p>
                <div id="caseStudy-role">
                  <h3>My Role</h3>
                  <p>
                    As the project manager, I established and led the engagement
                    process to inform the final design and build out of the
                    Kiosks. I worked with Transit Drives Indy and The Arts
                    Council of Indianapolis to ensure project requirements in
                    addition to collaborating with local artist, Josh Betsey, to
                    establish the final design.
                  </p>
                </div>
              </Grid>
              <Grid item xs={12} md={6}>
                <img
                  className={classes.img}
                  alt="img"
                  src="../../img/portfolio/redline.jpg"
                ></img>
              </Grid>
            </Grid>
          </div>
          {/* <div className={classes.root}>

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
    </div> */}
        </div>
      </div>
      <div id="phil">
        <div className="container">
          <div className="section-title">
            <h2>Objective</h2>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <p>
                The overall intent was to promote ridership along the Red Line and to stimulate interest within the surrounding communities through art and culture. Our objective was to utilize art as an engagement strategy to promote, engage, educate, and inform communities on the opportunities of public transit and the implementation of Indy's long-term transit plan.

          
              

                </p>
              </Grid>
              <Grid item xs={12} md={6}>
                <p>
                As one of the selected artists, my team at Big Car had the freedom to choose our medium and approach to the project. Big Car is a group of artists and community activists with a decade long history working with the Southside. Based on previous involvement with multi-modal transportation initiatives across the southside, My team formulated our own objective to establish a unique wayfinding system that was informative while uniquely capturing the identity of the community. 
              
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
                  <h3>-Stakeholder Engagement</h3>
                  Communication between stakeholders Transit Drives Indy, IndyGo, and The Arts Council of Indianapolis.
                  To ensure project met program requirements and expectations.
                  <h3>-Community and Artist Collaboration</h3>
                  Worked with local community stakeholders to establish location of kiosks through necessary permissions. 
                   and local artist to 
                  <h3>-Surveys</h3>
                  designed and organized survey distribution and community focus
                  groups to gather a consensus of what would be most helpful to
                  users in navigating the neighborhood.
                  <h3>-Focus Groups</h3>
                  Two focus groups were held to illicit a deeper understanding of the Community's values and to map out destinations along the redline. Groups were held at The Garfield Park Art Center, and La Luz Del Mundo, a local church adjacent to a Red Line station. 
                  <h3>-Creative Programming</h3>To draw the community in, three programmed events were set-up adjacent to each red-line station. This events provided an engaging way to have informative conversations and to gather feedback from community. The events acted as an information session and as a way illicit onsite survey responses from the community. Events included a movie night a movie night at local grocery store, a first friday event at the Garfield Park Arts Center, and an art market at University of Indianapolis.  
                
                </p>
              </Grid>
              <Grid item xs={12} md={6}>
                <img
                  className={classes.img}
                  alt="img"
                  src="../../img/portfolio/redline2.PNG"
                ></img>
                <br />
                <img
                  className={classes.img}
                  alt="img"
                  src="../../img/portfolio/redline2.PNG"
                ></img>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>

      <div id="experience">
        <div className="container">
          <div className="section-title">
            <h2>Outcome</h2>

            <p>
              Feedback from the community translated into three wayfinding kiosk
              designs built by a local Indianapolis Artist. Each kiosk includes
              a map of the area highlighting local attractions, diagrams of what
              the Red Line stops will look like, informative pamphlets about the
              IndyGo transit system, and other interactive features.

              "our partners have integrated an approach known as creative placemaking, incorporating arts and culture into the process of transportation in order to elevate the voices of local community members, enabling and empowering true community-led visions for these transportation projects. ""We’re excited to support their efforts as they use arts and culture to produce better end products and processes that not only better serve their communities, but reflect their unique culture and heritage.
            </p>
            <br />
            <br />

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
      </div>
    </div>
  );
}
