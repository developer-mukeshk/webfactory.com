import React from 'react';
import { Helmet } from "react-helmet";

import LoramLipsum from '../../masterLayout/LoramLipsum';

const CMS = () => {
  return (
    <React.Fragment>
      <Helmet> <title>Solutions | Content Management System</title> </Helmet>
      <div className='templateDescription'>
        <div className='page_title'><h4>Content Management System</h4></div>
        <div className='content'>
          <LoramLipsum />
        </div>
      </div>
    </React.Fragment>
  );
}

export default CMS;