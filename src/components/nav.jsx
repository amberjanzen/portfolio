import React from "react";
import About from "./about";
import {Link} from "react-router-dom";
import Main from "./main";

const Nav = () => {
    return (
      // <div className = "navbar">
      //   <ul>
      //     <li>About</li>
      //     <li>Experience</li>
      //     <li>My Work</li>
      //     <li>Contact</li>
      //   </ul>

      // </div>
      <div>
        {/* <div> */}
          {/* <Link to  = "/Test" replace></Link> */}
        {/* </div>
         <div className="sidebar-route">
           


            </div> */}

      <nav id="menu" className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
            >
              {" "}
              <span className="sr-only">Toggle navigation</span>{" "}
              <span className="icon-bar"></span>{" "}
              <span className="icon-bar"></span>{" "}
              <span className="icon-bar"></span>{" "}
            </button>
            <a className="navbar-brand page-scroll" href="#page-top">
              Amber Janzen
            </a>{" "}
          </div>

          <div
            className="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1"
          >
            
            <ul className="nav navbar-nav navbar-right">
              {/* <li>
                <a href="#features" className="page-scroll">
                  Features
                </a>
              </li> */}
              <li>
                <Link to = "/">Home</Link>

              </li>
              {/* <li>
                <Link to = "/Mywork">Portfolio</Link> */}
                {/* <a href="/#experience" className="page-scroll"> 
                  Experience 
               </a> */}
              {/* </li> */}
              <li>
              <Link to = "/Portfolio">Portfolio</Link>
                {/* <a href="/#research" className="page-scroll">
                  Research
                </a> */}
              </li>
              <li>
                <a href="/#portfolio" className="page-scroll">
                  Code
                </a>
              </li> 
              {/* <li>
                <a href="#testimonials" className="page-scroll">
                  Testimonials
                </a>
              </li> */}
              {/* <li>
                <a href="#team" className="page-scroll">
                  Team
                </a>
              </li> */}
              <li>
                <a href="/#contact" className="page-scroll">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      </div>
    );
  }


export default Nav;
