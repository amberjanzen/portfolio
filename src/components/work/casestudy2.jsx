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

export default function CaseStudy2() {
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
                <h2>Noblesville Comprehensive Plan</h2>
                <p>
                  The Noblesville Comprehensive Plan is a policy document
                  guiding future development and design decisions over the next
                  decade. The adoption of the 2020 the Noblesville Comprehensive
                  Plan Update represents one of the first Cities in the state of
                  Indiana to embrace built-form design and land-use policies.
                  The success of this plan resulted from extensive collaboration
                  between city stakeholders, exhaustive research on best
                  practices, and critical insights into community values,
                  demographic analysis, and land-use patterns.
                </p>
                <div id="caseStudy-role">
                  <h3>My Role</h3>
                  <p>
                    As Principle Planner, my work encompassed: 
                  </p>
                    <ul>
                      <li>Faciliation of roundtable discussions, stakeholder interviews, and public workshops</li>
                      <li>Understanding community goals and needs</li>
                      <li>Establishing a long-term strategic land-use policy informing the design and layout of future development</li>
                    </ul>
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
            <div>

            
            <h2>Objective</h2>
            <p> 
              In 2019, Noblesville hired HWC to establish an innovative land-use strategy that would result in sustainable development patterns. Prompted by immediate and forseen growth pressures, Noblesville had the opportunity to guide development in a way that could truly reflect the city's vision. To accuratly reflect this vision, It was critical that the land-use strategy established clear goals and design criteria. To establish this plan, my research involved:
            </p>
            <ul>
              <li>
                Understanding the existing needs and shared cultural values among the community.
              </li>
              <br />
              <li>
                {" "}
                understanding of the development goals among developers, stakeholders, elected officials, and existing plans.{" "}
              </li>
              <br />
              <li>
                {" "}
               Evaluation of current conditions that either limit or promote development.
              </li>
            </ul>
            </div>

            {/* Adjacent to Carmel and Fishers, Noblesville is one of the fastest growing cities in Indiana. While Noblesville welcomes this growth, city officials and community stakeholders grew concerned about how future development would effect the long-term layout and design of their city. Officials wanted to ensure that the Cities land-use development policies ensured high quality design and quality life for all residents. 
                 implement a comprehensive land-use policy  
                
                 high quality design and a quality of life is for the residents and stakeholders of Noblesville. Implement it into policy. To establish design and development policies that ensured the sustainable growth  */}

           
            <h2>The Process</h2>
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <p>
                  <h3>Synthesis of City Goals</h3>
                  <p> In the initial phase of the planning process, I reviewed the goals established in recently adopted plans to gather a consensus of overall development goals.</p>
                  <h3>Demographic and Environmental Analysis</h3>
                  <p>I utilized demographic and GIS tools to gather insights on current conditions that would impact current and future development. </p>
                  <h3>Roundtable Workshops</h3>
                  <p>Throughout the process, My team routinely met with City Stakeholders and Officials to gather feedback through a series of visioning, listening, and mapping excercies. </p>
                  <h3>Stakeholder Interviews</h3>
                  <p>
                    In addition to workshops, we conducted semi-structured interviews with several stakeholders to gather a deeper understanding of the community.  
                  </p>
                  <h3> Understanding Best Practices</h3>
                  <p>After analyzing intial feedback and data, I understood that an innovative approach to land-use was necessary to produce the desired outcome. After research on best practices, I introduced Built-Form Policy into the discussion. While not an entirelly new concept, it was somewhat unprecedented in traditional planning practice. I poured through numerous case studies and best practice examples.  </p>
        
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
              Established a Land-Use Policy. Protected critical environmental
              areas from future development. Created attainable housing
              criteria.
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
