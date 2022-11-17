import React from "react";
import About from "../../Components/Home/About";
import Banner from "../../Components/Home/Banner";
import Contact from "../../Components/Home/Contact";
import MyProject from "../../Components/Home/MyProject";
import MySkills from "../../Components/Home/MySkills";

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <MyProject></MyProject>
      <About></About>
      <MySkills></MySkills>
      <Contact></Contact>
    </>
  );
};

export default Home;
