import React from "react";
import { Outlet, Routes, Route } from "react-router-dom";
import About from "./about";
import Mywork from "./mywork";
import Experience from "./experience";
import Contact from "./contact";
import Header from "./header";
import Test from "./approach";
import Research from "./research";
import Philosophy from "./Philosophy";
import Approach from "./approach";
import DynamicScrollToTop from "./DynamicScrollToTop";

const Main = () => {
  return (
    <div>
         <DynamicScrollToTop />
      <About />
      <Experience />
      <Route path="mywork" element={<Mywork />}></Route>
      <Philosophy />
      <Approach />

      <Contact />
    </div>
  );
};
export default Main;
