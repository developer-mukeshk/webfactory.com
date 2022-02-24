import React from 'react';
import { Helmet } from "react-helmet";

import LoramLipsum from '../../masterLayout/LoramLipsum';

const DatabaseManagement = () => {
  return (
    <React.Fragment>
      <Helmet> <title>Services | Database Management</title> </Helmet>
      <div className='templateDescription'>
        <div className='page_title'><h4>Database Management System (DBMS) <small>Manipulate and control data to meet necessary conditions throughout the entire data lifecycle.</small></h4></div>
        <div className='content'>
          <p>Database management refers to the actions a business takes to manipulate and control data to meet necessary conditions throughout the entire data lifecycle.</p>
          <p>Database management system ( DBMS) is basically used to manage the database. Some examples of popular database software or DBMSs include MySQL, Microsoft Access, Oracle Database and Microsoft SQL.</p>
        </div>
      </div>
    </React.Fragment>
  )
}

export default DatabaseManagement;