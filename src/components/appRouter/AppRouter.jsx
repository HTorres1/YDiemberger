import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../home/Home";
import About from "../about/About";
import Blog from "../../containers/blog/Blog";
import PHD from "../phd/PHD";
import NGO from "../ngo/NGO";
import Gallery from "../gallery/Gallery";
import Contact from "../contact/Contact";
import Teaching from "../teaching/Teaching";
import News from "../news/News";


const AppRouter = () => {
  return (
    <Routes>
      <Route /* exact */ path="/" element={<Home />} />
      <Route /* exact */ path="/about" element={<About />} />
      <Route /* exact */ path="/blog" element={<Blog />} />
      <Route /* exact */ path="/phd" element={<PHD />} />
      <Route /* exact */ path="/ngo" element={<NGO />} />
      <Route /* exact */ path="/gallery" element={<Gallery />} />
      <Route /* exact */ path="/contact" element={<Contact />} />
      <Route /* exact */ path="/teaching" element={<Teaching />} />
      <Route /* exact */ path="/news" element={<News />} />
    </Routes>
  );
};

export default AppRouter;
