import React from 'react';
import { Helmet } from "react-helmet";
import SecondaryHeader from '../masterLayout/SecondaryHeader';

const Testimonial = () => {
  return (
    <React.Fragment>
      <Helmet> <title>Testimonial</title> </Helmet>
      <SecondaryHeader page_title="Testimonial" />
      <div className="loadTemplate testimonial">
        <h4>Testimonial</h4>
      </div>
    </React.Fragment>
  );
}

export default Testimonial;