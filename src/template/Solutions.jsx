import React from 'react';
import { Helmet } from "react-helmet";
import SecondaryHeader from '../masterLayout/SecondaryHeader';
import { NavLink, Switch, Route, useRouteMatch } from "react-router-dom";

// IMPORT COMPONENT
import SchoolERP from './solutions/SchoolERP';
import CollegeERP from './solutions/CollegeERP';
import Ecommerce from './solutions/Ecommerce';
import CMS from './solutions/CMS';
import CRM from './solutions/CRM';


const Solutions = () => {
  let { path, url } = useRouteMatch();
  return (
    <React.Fragment>
      <Helmet> <title>Solutions</title> </Helmet>
      <SecondaryHeader page_title="Solutions" />
      <div className="loadTemplate services">
        <div className='loadservices'>
          <Switch>
            <Route path={`${path}/school-erp/`} component={SchoolERP} />
            <Route path={`${path}/college-erp`} component={CollegeERP} />
            <Route path={`${path}/ECommerce`} component={Ecommerce} />
            <Route path={`${path}/cms`} component={CMS} />
            <Route path={`${path}/crm`} component={CRM} />
          </Switch>
        </div>
        <div className='quickLinks'>
          <div className="aside">
            <ul>
              <li><NavLink to={`${url}/school-erp`}>School ERP</NavLink></li>
              <li><NavLink to={`${url}/college-erp`}>College ERP</NavLink></li>
              <li><NavLink to={`${url}/ECommerce`}>E-Commerce Solution</NavLink></li>
              <li><NavLink to={`${url}/cms`}>Content Management System (CMS)</NavLink></li>
              <li><NavLink to={`${url}/crm`}>Customer Relationship Management (CRM)</NavLink></li>
            </ul>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Solutions;