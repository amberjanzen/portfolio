import React from "react";
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';


  const aboutStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1 ,
      display: "flex"
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'left',
      color: theme.palette.text.secondary,
    },
  }));

export default function About() {
  const classes = aboutStyles();

  return (
      <Container>
    <div id="about">
    <div className = {classes.root}>
    <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <div className = {classes.paper}>
            <img src="img/about.jpg" className="img-responsive" alt="" />{" "}

            </div>
            {" "}
          </Grid>
          <Grid item xs={12} md={6}>
            <div className = {classes.paper}>
              <div id ="about-text">
              <h2>Amber Janzen</h2>
              <h3>
                Hi there, I specialize in creative engagement and data
                collection strategies
              </h3>
              <p>
                As a researcher and designer I aim to invoke meaningful
                interaction through human-centered design. With over three years
                experience as an Urban Planning Professional, I have decided to transition
                my skills from informing design in the built environment into the
                digital environment. As a user researcher I offer:
                <h5>
                  -Over seven years experience carrying out research, data
                  collection, and engagement strategies both in a professional
                  and academic environment.
                </h5>
                <h5>
                  -Consulting and Non-profit experience as an Urban Planning
                  Professional.
                </h5>
                <h5>-Understanding of full-stack web development and design.</h5>
                <h5>
                  -The ability to analyze and communicate complex patterns of
                  human behavior that inform design solutions.{" "}
                </h5>
                <h5>
                  -Experience collaborating in cross-cultural and
                  cross-professional settings.
                </h5>
                <h5>
                  -Educational background in Applied Anthropology and Urban
                  Planning and Design with extensive knowledge of demographic,
                  qualitative, and ethnographic research methods.
                </h5>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                {/* Working professionally as a planner over the past three years, I have devised creative public engagement strategies and have crafted unique research methodologies to gather data and anaylize feedback from a diverse range of stakeholders, communities, and audiences.d
                  
                  I enjoy collaborating in a team environment to design elegant solutions to a myriad complex problems.  */}
                {/* I translate my experience and skills as a planner and researcher */}
                {/*                   
                  Working professionally as a planning consultant and program manager over the past three years, I have utilized a mixed methodology approach to gathering data and feedback from a diverse range of stakeholders, communities, and audiences. I am skilled in strategizing and leading research and engagement processes fitted to the needs of a project.  
                  

                  hile I love urban planning, I have found my true soulmate in UX/UI.
                  three of which are within a professional setting. While I primarily in qualitative and ethnographic research methods. 
                  
                  -Planning led me to UX/UI as I began to facilitate more online engagement processes -So after I was laid off from covid I decided to take the plunge head first into this new career. -
                  I am truly passionate about the underpinnings of human-centered design which is why I studied anthropology and went on to become an Urban Planner
                  
                  Urban Planning and UX/UI professions are devoted to the principles of human centered design are fundamentally the same and the roles of a User Researcher and Planner 

                   I have always had a knack for understanding and communicating complex issues which is why I studied anthropology in my undergraduate career. I fell in love with qualitative and ethnographic research methods, but I had no intention of pursuing an academic career. I wanted to apply the skills I learned in my undergrad 
                   revolves around research, engagement, and tackling complex problems and  */}
              </p>
              </div>
            </div>
            </Grid>
        </Grid>
    </div>
    </div>
      </Container>
  );
};


