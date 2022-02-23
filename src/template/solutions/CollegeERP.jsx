import React from 'react';
import { Helmet } from "react-helmet";

import LoramLipsum from '../../masterLayout/LoramLipsum';

const CollegeERP = () => {
  return (
    <React.Fragment>
      <Helmet> <title>Solutions | College ERP</title> </Helmet>
      <div className='templateDescription'>
        <div className='page_title'><h4>College ERP</h4></div>
        <div className='content'>
          <LoramLipsum />
        </div>
      </div>
    </React.Fragment>
  );
}

export default CollegeERP;