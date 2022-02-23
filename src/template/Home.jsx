import React from 'react';
import {Helmet} from "react-helmet"; 

// COMPONENT
import Slider from './home/Slider';
import Introduction from './home/Introduction';
import Features from './home/Features';
import Testimonial from './home/Testimonial';

const Home = () => {
  return (
    <React.Fragment>
      <Helmet> <title>The Website Factory</title> </Helmet>
      <div className="homeTemplate">
        <Slider />
        <Introduction />
        <Features />
        <Testimonial />

      <div className="laptopt  pt-5">
        <div className="col-auto" data-aos="zoom-in">
          <img src={require('../assets/images/laptop-graphic.png')} alt="" />
        </div>
      </div>

      </div>
    </React.Fragment>
  )
}

export default Home;