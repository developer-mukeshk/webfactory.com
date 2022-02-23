import React from 'react';
import { Helmet } from "react-helmet";

import LoramLipsum from '../../masterLayout/LoramLipsum';

const Design = () => {
  return (
    <React.Fragment>
      <Helmet> <title>Services | UI/UX Design</title> </Helmet>
      <div className='templateDescription'>
        <div className='page_title'><h4>UI/UX Design</h4></div>
        <div className='content'>
          <LoramLipsum />
        </div>
      </div>
    </React.Fragment>
  )
}

export default Design;