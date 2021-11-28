import React from 'react';
import Header from '../../Shared/Header/Header';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import MyProject from '../MyProject/MyProject';
import MySkills from '../MySkills/MySkills';

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