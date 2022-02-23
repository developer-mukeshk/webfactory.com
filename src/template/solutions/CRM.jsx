import React from 'react';
import { Helmet } from "react-helmet";

import LoramLipsum from '../../masterLayout/LoramLipsum';

const CRM = () => {
  return (
    <React.Fragment>
      <Helmet> <title>Solutions | Customer Relationship Management</title> </Helmet>
      <div className='templateDescription'>
        <div className='page_title'><h4>Customer Relationship Management</h4></div>
        <div className='content'>
          <LoramLipsum />
        </div>
      </div>
    </React.Fragment>
  );
}

export default CRM;