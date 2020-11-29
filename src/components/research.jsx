import React from "react";
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Container from "@material-ui/core/Container";


import CaseStudy1 from "./work/casestudy1";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from '@material-ui/core/Typography';
import { TextareaAutosize } from "@material-ui/core";


export default function Research() {

  return (
    <Container>
    <div id = "research"> 
          <h2>Case Studies</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
            dapibus leonec.
          </p>
        <ul class="research-grid">
        <li>
              <div class="research-box research-img-1">
               < Link to="/noblesville-comp-plan">
                  <h3>Noblesville Comprehensive Plan</h3>
                  <p>
                  Chocolate cake marshmallow candy canes marshmallow cheesecake. Candy bonbon marzipan danish cotton candy. Danish danish cupcake candy canes. Topping soufflé muffin.
                  </p>
                  </Link>
              </div>
            </li>
            <li>
              <div class="research-box research-img-1">
               < Link to="/noblesville-comp-plan">
                  <h3>Noblesville Comprehensive Plan</h3>
                  <p>
                  Chocolate cake marshmallow candy canes marshmallow cheesecake. Candy bonbon marzipan danish cotton candy. Danish danish cupcake candy canes. Topping soufflé muffin.
                  </p>
                  </Link>
              </div>
            </li>
            <li>
              <div class="research-box research-img-1">
               < Link to="/noblesville-comp-plan">
                  <h3>Noblesville Comprehensive Plan</h3>
                  <p>
                  Chocolate cake marshmallow candy canes marshmallow cheesecake. Candy bonbon marzipan danish cotton candy. Danish danish cupcake candy canes. Topping soufflé muffin.
                  </p>
                  </Link>
              </div>
            </li>



    </ul>
    
    </div>
      </Container>
  );
}


    // <div className={classes.details}>
      /* <CardMedia
          className={classes.media}
          image="../img/portfolio/01-small.jpg"
          title="Contemplative Reptile"
        /> */
      // <CardContent className={classes.content}>
      //   <h3>Ready for the Red Line</h3>
      //   <p>
      //     In 2017, my team at Big Car Collaborative recieved funds
      //     through Transit Drives Indy to participate in a creative
      //     placemaking project awarded through Transportation For
      //     America. 
      //   </p>
      //   <br />
      //   <Link to="/readyfortheredline" className={classes.button}>
      //     {" "}
      //     See Case Study
      //   </Link>
    //   // </CardContent>
    // </div>
    /* </Grid> */
//     <CardMedia
//       className={classes.media}
//       image="../img/portfolio/redline.jpg"
//       title="Contemplative Reptile"
//     />
//   </Card>
// </Grid>
// <Grid item xs={12}>
//   <Card className={classes.root} elevation={3}>
//     {/* <Grid className={classes.paper}> */}
//     <div className={classes.details}>
//       {/* <CardMedia
//           className={classes.media}
//           image="../img/portfolio/01-small.jpg"
//           title="Contemplative Reptile"
//         /> */}
//       <CardContent className={classes.content}>
//         <h3>Noblesville Comprehensive Plan</h3>
//         <p>
//          Implementing a shared vision of long-term development and design outcomes.Implementing a shared vision of long-term development and design outcomes.
//         </p>
//         <br />
//         <Link to="/noblesville-comp-plan" className={classes.button}>
//           {" "}
//           See Case Study
//         </Link>
//       </CardContent>
//     </div>
//     {/* </Grid> */}
//     <CardMedia
//       className={classes.media}
//       image="../img/portfolio/Noblesville_builtform_2020.PNG"
//       title="Contemplative Reptile"
//     />
//   </Card>
// </Grid>
// <Grid item xs={12}>
//   <Card className={classes.root} elevation={3}>
//     {/* <Grid className={classes.paper}> */}
//     <div className={classes.details}>
//       {/* <CardMedia
//           className={classes.media}
//           image="../img/portfolio/01-small.jpg"
//           title="Contemplative Reptile"
//         /> */}
//       <CardContent className={classes.content}>
//         <h3>Lockerbie Public Space</h3>
//         <p>
//         In 2017, my team at Big Car Collaborative recieved funds
//           through Transit Drives Indy to participate in a creative
//           placemaking project awarded through Transportation For
//           America. 
//         </p>
//         <br />
//         <Link to="/CaseStudy1" className={classes.button}>
//           {" "}
//           See Case Study
//         </Link>
//       </CardContent>
//     </div>
//     {/* </Grid> */}
//     <CardMedia
//       className={classes.media}
//       image="../img/portfolio/IMG_0010.jpg"
//       title="Contemplative Reptile"
//     />
//   </Card>
// </Grid>
// <Grid item xs={12}>
//   <Card className={classes.root} elevation={3}>
//     {/* <Grid className={classes.paper}> */}
//     <div className={classes.details}>
//       {/* <CardMedia
//           className={classes.media}
//           image="../img/portfolio/01-small.jpg"
//           title="Contemplative Reptile"
//         /> */}
//       <CardContent className={classes.content}>
//         <h3>Morgan County Comprehensive Plan</h3>
//         <p>
//         In 2017, my team at Big Car Collaborative recieved funds
//           through Transit Drives Indy to participate in a creative
//           placemaking project awarded through Transportation For
//           America. 
//         </p>
//         <br />
//         <Link to="/CaseStudy1" className={classes.button}>
//           {" "}
//           See Case Study
//         </Link>
//       </CardContent>
//     </div>
//     {/* </Grid> */}
//     <CardMedia
//       className={classes.media}
//       image="../img/portfolio/01-small.jpg"
//       title="Contemplative Reptile"
//     />
//   </Card>
// </Grid>
// </Grid> */}