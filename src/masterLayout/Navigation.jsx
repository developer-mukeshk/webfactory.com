import React from 'react';
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <React.Fragment>
      <div className='navigation'>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/services/design">Services</Link></li>
          <li><Link to="/solutions/erp-solutions">Solutions</Link></li>
          <li><Link to="/project">Project</Link></li>
          <li><Link to="/testimonial">Testimonial</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
    </React.Fragment>
  );
}

export default Navigation;