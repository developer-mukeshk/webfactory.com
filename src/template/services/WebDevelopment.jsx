import React from 'react';
import { Helmet } from "react-helmet";

import LoramLipsum from '../../masterLayout/LoramLipsum';

const WebDevelopment = () => {
  return (
    <React.Fragment>
      <Helmet> <title>Services | Web Development</title> </Helmet>
      <div className='templateDescription'>
        <div className='page_title'><h4>Web Development</h4></div>
        <div className='content'>
          <LoramLipsum />
        </div>
      </div>
    </React.Fragment>
  )
}

export default WebDevelopment;