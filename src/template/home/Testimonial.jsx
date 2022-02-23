import React from 'react';
import testimonialhumbnail from '../../assets/images/clients/sapiens.jpg';

const Testimonial = () => {
  return (
    <React.Fragment>
      <div className="testimonial">
        <div className="container" data-aos="fade-up">
          <div className="client">
            <h3>What Our Clients Says?</h3>
            <p>Etiam mattis, mi nec pretium posuere, dui dolor viverra nibh, ut pharetra nisl libero non velit. Maecenas viverra sollicitudin malesuada. Donec maximus, nisi eu finibus dignissim, ex tellus semper massa.</p>
            <strong>Mangesh Wankhade</strong>
            <span>CEO, Sapiens</span>
          </div>
          <div className="testimonialhumbnail">
            <img src={testimonialhumbnail} alt="" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Testimonial;