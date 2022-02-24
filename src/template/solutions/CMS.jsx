import React from 'react';
import { Helmet } from "react-helmet";

import LoramLipsum from '../../masterLayout/LoramLipsum';

const CMS = () => {
  return (
    <React.Fragment>
      <Helmet> <title>Solutions | Content Management System</title> </Helmet>
      <div className='templateDescription'>
        <div className='page_title'><h4>Content Management System <small>A CMS is typically used for enterprise content management and web content management.</small></h4></div>
        <div className='content'>
          <p>A web content management system is a software content management system specifically for web content. It provides website authoring, collaboration, and administration tools that help users with little knowledge of web programming languages or markup languages create and manage website content.</p>
        </div>
      </div>
    </React.Fragment>
  );
}

export default CMS;