import React from 'react';
import { Helmet } from "react-helmet";

import LoramLipsum from '../../masterLayout/LoramLipsum';

const DatabaseManagement = () => {
  return (
    <React.Fragment>
      <Helmet> <title>Services | Database Management</title> </Helmet>
      <div className='templateDescription'>
        <div className='page_title'><h4>Database Management</h4></div>
        <div className='content'>
          <LoramLipsum />
        </div>
      </div>
    </React.Fragment>
  )
}

export default DatabaseManagement;