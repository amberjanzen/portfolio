import React from "react";
// import { makeStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
// import Grid from '@material-ui/core/Grid';
import  { Link, Outlet
  } from "react-router-dom";
  import Test from  "./approach";

  // const useStyles = makeStyles((theme) => ({
  //   root: {
  //     flexGrow: 1,
  //   },
  //   paper: {
  //     padding: theme.spacing(2),
  //     textAlign: 'center',
  //     color: theme.palette.text.secondary,
  //   },
  // }));
  

const Mywork = () => {

    return (
      <div id = "experience">
        <div class="xop-section">
          <ul class="xop-grid">
            <li>
               
              <div class="xop-box xop-img-1">
                <a href="https://codepen.io/amberjanzen/pen/xxZNOEr">
                  <h3>paint</h3>
                  <p>
                  A simple app showcasing Studio Ghibli films designed with JavaScript, HTML, and CSS through the Ghibli APIs
                  </p>
                </a>
              </div>
            </li>
            <li>
              <div class="xop-box xop-img-2">
                <a href="https://codepen.io/amberjanzen/pen/xxZNOEr">
                  <h3>paint</h3>
                  <p>
                  A simple app showcasing Studio Ghibli films designed with JavaScript, HTML, and CSS through the Ghibli APIs
                  </p>
                </a>
              </div>
            </li>
            <li>
              <div class="xop-box xop-img-3">
                <a href="https://codepen.io/amberjanzen/pen/xxZNOEr">
                  <h3>paint</h3>
                  <p>
                  A simple app showcasing Studio Ghibli films designed with JavaScript, HTML, and CSS through the Ghibli APIs
                  </p>
                </a>
              </div>
            </li>
            <li>
              <div class="xop-box xop-img-4">
                <a href="https://codepen.io/amberjanzen/pen/xxZNOEr">
                  <h3>paint</h3>
                  <p>
                  A simple app showcasing Studio Ghibli films designed with JavaScript, HTML, and CSS through the Ghibli APIs
                  </p>
                </a>
              </div>
            </li>
            <li>
              <div class="xop-box xop-img-5">
                <a href="https://codepen.io/amberjanzen/pen/xxZNOEr">
                  <h3>paint</h3>
                  <p>
                  A simple app showcasing Studio Ghibli films designed with JavaScript, HTML, and CSS through the Ghibli APIs
                  </p>
                </a>
              </div>
            </li>
            <li>
              <div class="xop-box xop-img-6">
                <a href="https://codepen.io/amberjanzen/pen/xxZNOEr">
                  <h3>paint</h3>
                  <p>
                  A simple app showcasing Studio Ghibli films designed with JavaScript, HTML, and CSS through the Ghibli APIs
                  </p>
                </a>
              </div>
            </li>
          </ul>
        </div>

      </div>
      //   <div>

      // <div id="portfolio" className="text-center">
      //   <div className="container">
      //     <div className="section-title">
      //       <h2>Code</h2>
      //       <p>
      //         Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
      //         dapibus leonec.
      //       </p>
      //     </div>
      //     <div className="row">
      //       <div className="portfolio-items">
      //         {/* <div className="col-sm-6 col-md-4 col-lg-4">
      //           <div className="portfolio-item">
      //             <div className="hover-bg">
      //               {" "}
      //               <Link to = '/test'>
      //               <div className="hover-text">
      //                 <h4>Lorem Ipsum</h4>
      //               </div>
      //               <img
      //                 src="img/plantpal.PNG"
      //                 className="img-responsive"
      //                 alt="Project Title"
      //               />{" "}

      //               </Link> */}
      //               {/* <a
      //                 href="/Test"
      //                 title="Project Title"
      //                 data-lightbox-gallery="gallery1"
      //               > */}
      //               {/* </a>{" "} */}
      //             {/* </div>
      //           </div>
      //         </div> */}
      //         <div className="col-sm-6 col-md-4 col-lg-4">
      //           <div className="portfolio-item">
      //             <div className="hover-bg">
      //               {" "}
      //               <a
      //                 href="https://codepen.io/amberjanzen/pen/xxZNOEr" target="_blank"
      //                 title="Project Title"
      //                 data-lightbox-gallery="gallery1"
      //               >
      //                 <div className="hover-text">
      //                   <h4>CSS Creature</h4>
      //                   <p>A simple app showcasing Studio Ghibli films designed with JavaScript, HTML, and CSS through the Ghibli APIs</p>
      //                 </div>
      //                 <img
      //                   src="img/portfolio/css_panda1.PNG"
      //                   className="img-responsive"
      //                   alt="Project Title"
      //                 />{" "}
      //               </a>{" "}
      //             </div>
      //           </div>
      //         </div>
      //         <div className="col-sm-6 col-md-4 col-lg-4">
      //           <div className="portfolio-item">
      //             <div className="hover-bg">
      //               {" "}
      //               <a
      //                 href="img/portfolio/03-large.jpg"
      //                 title="Project Title"
      //                 data-lightbox-gallery="gallery1"
      //               >
      //                 <div className="hover-text">
      //                   <h4>Lorem Ipsum</h4>
      //                 </div>
      //                 <img
      //                   src="img/portfolio/03-small.jpg"
      //                   className="img-responsive"
      //                   alt="Project Title"
      //                 />{" "}
      //               </a>{" "}
      //             </div>
      //           </div>
      //         </div>
      //         <div className="col-sm-6 col-md-4 col-lg-4">
      //           <div className="portfolio-item">
      //             <div className="hover-bg">
      //               {" "}
      //               <a
      //                 href="img/portfolio/04-large.jpg"
      //                 title="Project Title"
      //                 data-lightbox-gallery="gallery1"
      //               >
      //                 <div className="hover-text">
      //                   <h4>Lorem Ipsum</h4>
      //                 </div>
      //                 <img
      //                   src="img/portfolio/04-small.jpg"
      //                   className="img-responsive"
      //                   alt="Project Title"
      //                 />{" "}
      //               </a>{" "}
      //             </div>
      //           </div>
      //         </div>
      //         <div className="col-sm-6 col-md-4 col-lg-4">
      //           <div className="portfolio-item">
      //             <div className="hover-bg">
      //               {" "}
      //               <a
      //                 href="img/portfolio/05-large.jpg"
      //                 title="Project Title"
      //                 data-lightbox-gallery="gallery1"
      //               >
      //                 <div className="hover-text">
      //                   <h4>Adipiscing Elit</h4>
      //                 </div>
      //                 <img
      //                   src="img/portfolio/05-small.jpg"
      //                   className="img-responsive"
      //                   alt="Project Title"
      //                 />{" "}
      //               </a>{" "}
      //             </div>
      //           </div>
      //         </div>
      //         <div className="col-sm-6 col-md-4 col-lg-4">
      //           <div className="portfolio-item">
      //             <div className="hover-bg">
      //               {" "}
      //               <a
      //                 href="img/portfolio/06-large.jpg"
      //                 title="Project Title"
      //                 data-lightbox-gallery="gallery1"
      //               >
      //                 <div className="hover-text">
      //                   <h4>Dolor Sit</h4>
      //                 </div>
      //                 <img
      //                   src="img/portfolio/06-small.jpg"
      //                   className="img-responsive"
      //                   alt="Project Title"
      //                 />{" "}
      //               </a>{" "}
      //             </div>
      //           </div>
      //         </div>
      //         <div className="col-sm-6 col-md-4 col-lg-4">
      //           <div className="portfolio-item">
      //             <div className="hover-bg">
      //               {" "}
      //               <a
      //                 href="img/portfolio/07-large.jpg"
      //                 title="Project Title"
      //                 data-lightbox-gallery="gallery1"
      //               >
      //                 <div className="hover-text">
      //                   <h4>Dolor Sit</h4>
      //                 </div>
      //                 <img
      //                   src="img/portfolio/07-small.jpg"
      //                   className="img-responsive"
      //                   alt="Project Title"
      //                 />{" "}
      //               </a>{" "}
      //             </div>
      //           </div>
      //         </div>
      //         <div className="col-sm-6 col-md-4 col-lg-4">
      //           <div className="portfolio-item">
      //             <div className="hover-bg">
      //               {" "}
      //               <a
      //                 href="img/portfolio/08-large.jpg"
      //                 title="Project Title"
      //                 data-lightbox-gallery="gallery1"
      //               >
      //                 <div className="hover-text">
      //                   <h4>Lorem Ipsum</h4>
      //                 </div>
      //                 <img
      //                   src="img/portfolio/08-small.jpg"
      //                   className="img-responsive"
      //                   alt="Project Title"
      //                 />{" "}
      //               </a>{" "}
      //             </div>
      //           </div>
      //         </div>
      //         <div className="col-sm-6 col-md-4 col-lg-4">
      //           <div className="portfolio-item">
      //             <div className="hover-bg">
      //               {" "}
      //               <a
      //                 href="img/portfolio/09-large.jpg"
      //                 title="Project Title"
      //                 data-lightbox-gallery="gallery1"
      //               >
      //                 <div className="hover-text">
      //                   <h4>Adipiscing Elit</h4>
      //                 </div>
      //                 <img
      //                   src="img/portfolio/09-small.jpg"
      //                   className="img-responsive"
      //                   alt="Project Title"
      //                 />{" "}
      //               </a>{" "}
      //             </div>
      //           </div>
      //         </div>
      //       </div>
      //     </div>
      //   </div>
      // </div>
      //   </div>
    );
  }


export default Mywork;