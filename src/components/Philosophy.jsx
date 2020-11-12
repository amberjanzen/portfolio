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
<br></br>
<br></br>
<p>
I believe that innovation is born out of chaos and that elegant design is an iterative process. As researcher and designer, these beliefs are the foundation in my approach to research and informing design solutions. In my experience as an Urban Planner, I applied these beliefs in my research to inform the policies and designs that shape our physical space. As a user researcher, I carry the same belief in my research with the intent to invoke meaningful human interaction through elegant and innovative design. 
</p>

          
          </h3>
        </div>
        <div className={classes.root}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Grid className={classes.paper}>
                <div class="phil-box skill-img-1">
                  <h3>Human Centered Design</h3>
                  <p>
                    In 99% of cases, I consider Human Centered Design as the supreme problem solving method. From my experience, applying Empathy and understanding of the people we design for will always lead to more productive outcomes. In any research project, I always approach human centered design by incorporating ethnographic methods into my research strategy. 
                  I carry an empathetic approach in informing design by developing an understanding of the people’s needs through listening and observation. I’ll synthesize my understanding and collaborate with developers, designers, and engineers to to identify opportunities and solutions. I’ll iterate on this process until a ideal solution is established. 
                  </p>
                </div>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Grid className={classes.paper}>
                <div class="phil-box skill-img-1">
                  <h3>Storytelling</h3>
                  <p>
                   I rely on storytelling as a tool for both  research and communication. A story provides context and uncovers the nuances in the user experience. Surveys and structured interviews are efficient and less-time consuming, but the rigidness in these methods leads to answers with little context. To illicit a story, I allow participants the space to respond through open-ended questions and probes. I'll then utilize storytelling to persuade buy-in from stakeholders and to iterate upon design solutions with my team.
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
