import React from 'react';
import { Helmet } from "react-helmet";

import LoramLipsum from '../../masterLayout/LoramLipsum';

const CRM = () => {
  return (
    <React.Fragment>
      <Helmet> <title>Solutions | Customer Relationship Management</title> </Helmet>
      <div className='templateDescription'>
        <div className='page_title'><h4>Customer Relationship Management <small>Technology for managing all your company's relationships and interactions with customers.</small></h4></div>
        <div className='content'>
          <p>Customer relationship management (CRM) is the combination of practices, strategies and technologies that companies use to manage and analyze customer interactions and data throughout the customer lifecycle. The goal is to improve customer service relationships and assist in customer retention and drive sales growth.</p>
        </div>
      </div>
    </React.Fragment>
  );
}

export default CRM;