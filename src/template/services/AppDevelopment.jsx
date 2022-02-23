import React from 'react';
import { Helmet } from "react-helmet";

import LoramLipsum from '../../masterLayout/LoramLipsum';

const AppDevelopment = () => {
  return (
    <React.Fragment>
      <Helmet> <title>Services | App Development</title> </Helmet>
      <div className='templateDescription'>
        <div className='page_title'><h4>App Development</h4></div>
        <div className='content'>
          <LoramLipsum />
        </div>
      </div>
    </React.Fragment>
  )
}

export default AppDevelopment;