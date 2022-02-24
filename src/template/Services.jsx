import React from 'react';
import { Helmet } from "react-helmet";
import SecondaryHeader from '../masterLayout/SecondaryHeader';
import { NavLink, Switch, Route, useRouteMatch } from "react-router-dom";

// IMPORT COMPONENT
import Design from './services/Design';
import AppDevelopment from './services/AppDevelopment';
import DatabaseManagement from './services/DatabaseManagement';
import WebDevelopment from './services/WebDevelopment';


const Services = () => {
  let { path, url } = useRouteMatch();
  return (
    <React.Fragment>
      <Helmet> <title>Services</title> </Helmet>
      <SecondaryHeader page_title="Services" />
      <div className="loadTemplate services">
        <div className='loadservices'>

          <Switch>
            <Route path={`${path}/design`} component={Design} />
            <Route path={`${path}/web-development`} component={WebDevelopment} />
            <Route path={`${path}/app-development`} component={AppDevelopment} />
            <Route path={`${path}/database-management`} component={DatabaseManagement} />
          </Switch>
        </div>
        <div className='quickLinks'>
          <div className="aside">
            <ul>
              <li><NavLink to={`${url}/design`}>UX/UI Design</NavLink></li>
              <li><NavLink to={`${url}/web-development`}>Web Development</NavLink></li>
              <li><NavLink to={`${url}/app-development`}>App Development</NavLink></li>
               <li><NavLink to={`${url}/database-management`}>Database Management</NavLink></li>
            </ul>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Services;