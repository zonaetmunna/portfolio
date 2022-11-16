import React from "react";
import Header from "../../Components/common/Header/Header";
import About from "../../Components/Home/About";
import Banner from "../../Components/Home/Banner";
import Contact from "../../Components/Home/Contact";
import MyProject from "../../Components/Home/MyProject";
import MySkills from "../../Components/Home/MySkills";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <MyProject></MyProject>
      <About></About>
      <MySkills></MySkills>
      <Contact></Contact>
    </div>
  );
};

export default Home;
