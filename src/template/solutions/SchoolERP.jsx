import React from 'react';
import { Helmet } from "react-helmet";

import LoramLipsum from '../../masterLayout/LoramLipsum';

const SchoolERP = () => {
  return (
    <React.Fragment>
      <Helmet> <title>Solutions | School ERP</title> </Helmet>
      <div className='templateDescription'>
        <div className='page_title'><h4>School ERP</h4></div>
        <div className='content'>
          <LoramLipsum />
        </div>
      </div>
    </React.Fragment>
  );
}

export default SchoolERP;