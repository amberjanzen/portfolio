import React, {useEffect }from "react";
import {BrowserRouter as Router, Redirect, Route, Switch, Routes, Link, Outlet} from "react-router-dom";
import About from "./components/about";
import './App.css';
import Main from "./components/main";
import Header from "./components/header";
import Nav from "./components/nav";
import Mywork from "./components/mywork";
import Experience from "./components/experience";
import Contact from "./components/contact";
import Research from "./components/research";
import CaseStudy1 from "./components/work/casestudy1";
import CaseStudy2 from "./components/work/casestudy2";
import Portfolio from  "./components/portfolio";


function App () {



    return (
      <div>
        <Router>
        <Nav />
        
        <Switch>

        <Route exact path ="/">
          <Main />
        </Route>
        {/* <Redirect to ="/" /> */}
        {/* <Header />
        <About /> */}
        {/* <Experience /> */}
        <Route path ="/Mywork">
        <Mywork />
        </Route>
        <Route path ="/Portfolio">
        <Portfolio />
        </Route>
        <Route exact path = "/Research">
        <Research />
        </Route>
        <Route exact path = "/readyfortheredline"> <CaseStudy1 /></Route>
        <Route exact path = "/noblesville-comp-plan"> <CaseStudy2 /></Route>
        {/* <Contact /> */}
        </Switch>

        </Router>


      </div>


    )

    
    // <Router>
    //   <nav>
    //     <Link to = "/">Main</Link>
        
    //     {/* <Link to = "about" className= "page-scroll">about</Link>
    //     <Link to = "experience"className= "page-scroll">experience</Link>
    //     <Link to = "mywork"className= "page-scroll">work</Link>
    //     <Link to = "contact"className= "page-scroll">contact</Link> */}




        

    //   </nav>
    //       <Routes>
    //         <Route path ="/" element={<Main />}>
    //       </Route>
    //         {/* <Route path= "header" element={<Header />}></Route>
    //         <Route path= "about" element={<About />}></Route>
    //         <Route path= "experience" element={<Experience />}></Route>
    //         <Route path= "mywork" element={<Mywork />}></Route>
    //         <Route path= "/contact" element={<Contact />}></Route> */}
    //       </Routes>
    //       <nav>

    //       </nav> 
    //     <Nav />



    //       {/* <Redirect from = "/test" to = "/"></Redirect>
    //     {/* <Route path = "/test">
    //       <Test />

    //     </Route> */}
    //     {/* <Route path = "/contact">
    //       <Contact />
    //       </Route>
    //       <Route path = "/main">
    //       <Main />
    //       <Route path = "/contact">
    //         <Contact />
    //         <Route path = "/mywork">
    //           <Mywork />
    //         </Route>
    //       </Route>
 

    //     </Route>
    //     <Route exact path = "/main/contact">


    //     </Route>
    //     <Route path = "/Header">
    //       <Test />

    //     </Route> */}
    //       {/* <Test /> */}



    //       </Router>

    
  }




export default App;
