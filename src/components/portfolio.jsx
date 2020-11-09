import React from 'react'
import About from "./about";
import Mywork from "./mywork";
import Experience from "./experience";
import Contact from "./contact";
import Header from "./header";
import Test from "./test";
import Research from "./research"
import DynamicScrollToTop  from "./DynamicScrollToTop"



const Portfolio = () => {
    return (
        <div>
            <DynamicScrollToTop />
            <Header />
            <Research />
            <br />
            <Mywork />
        </div>

    )
}
export default Portfolio