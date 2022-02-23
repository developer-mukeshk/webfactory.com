import React from 'react';
import { Helmet } from "react-helmet";

import LoramLipsum from '../../masterLayout/LoramLipsum';

const Ecommerce = () => {
  return (
    <React.Fragment>
      <Helmet> <title>Solutions | E-Commerce Solution</title> </Helmet>
      <div className='templateDescription'>
        <div className='page_title'><h4>E-Commerce Solution</h4></div>
        <div className='content'>
          <LoramLipsum />
        </div>
      </div>
    </React.Fragment>
  );
}

export default Ecommerce;