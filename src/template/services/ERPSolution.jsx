import React from 'react';
import { Helmet } from "react-helmet";

import LoramLipsum from '../../masterLayout/LoramLipsum';

const ERPSolution = () => {
  return (
    <React.Fragment>
      <Helmet> <title>Services | ERP Solution</title> </Helmet>
      <div className='templateDescription'>
        <div className='page_title'><h4>ERP Solution</h4></div>
        <div className='content'>
          <LoramLipsum />
        </div>
      </div>
    </React.Fragment>
  )
}

export default ERPSolution;