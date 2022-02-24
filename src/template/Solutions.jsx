import React from 'react';
import { Helmet } from "react-helmet";
import SecondaryHeader from '../masterLayout/SecondaryHeader';
import { NavLink, Switch, Route, useRouteMatch } from "react-router-dom";

// IMPORT COMPONENT
import ErpSolution from './solutions/ErpSolution';
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
            <Route path={`${path}/erp-solutions/`} component={ErpSolution} />
            <Route path={`${path}/ecommerce`} component={Ecommerce} />
            <Route path={`${path}/cms`} component={CMS} />
            <Route path={`${path}/crm`} component={CRM} />
          </Switch>
        </div>
        <div className='quickLinks'>
          <div className="aside">
            <ul>
              <li><NavLink to={`${url}/erp-solutions`}>ERP Solutions</NavLink></li>
              <li><NavLink to={`${url}/ecommerce`}>Ecommerce Solution</NavLink></li>
              <li><NavLink to={`${url}/cms`}>Content Management System</NavLink></li>
              <li><NavLink to={`${url}/crm`}>Customer Relationship Management</NavLink></li>
            </ul>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Solutions;