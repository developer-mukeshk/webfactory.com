import React from 'react';
import { Helmet } from "react-helmet";
import SecondaryHeader from '../masterLayout/SecondaryHeader';

import ClientTestimonial from './API/ClientTestimonial';

const Testimonial = () => {
  return (
    <React.Fragment>
      <Helmet> <title>Testimonial</title> </Helmet>
      <SecondaryHeader page_title="Testimonial" />
      <div className="loadTemplate testimonials">
        {ClientTestimonial.map((val) => {
          return (
            <div class="testimonial">
              <img src={require('../assets/images/testimonial.png')} alt="" />
              <p>{val.title}</p>
              <span>{val.name} <small>{val.company}</small></span>
            </div>
          )
        })}
      </div>
    </React.Fragment>
  );
}

export default Testimonial;