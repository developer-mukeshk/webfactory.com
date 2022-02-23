import React from "react";
import {Route, Switch } from 'react-router-dom';

// IMPORT COMPONENTS
import Home from '../template/Home'; 
import About from "../template/About";
import Services from "../template/Services";
import Solutions from "../template/Solutions";
import Projects from "../template/Projects";
import Testimonial from "../template/Testimonial";
import Contact from "../template/Contact";
import Error404 from '../template/Error404';

const LoadTemplate = () => {
  return (
    <React.Fragment>
      <div className="templateBody" id="templateBody">
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/services' component={Services}></Route>
          <Route path='/solutions' component={Solutions} />
          <Route path='/project' component={Projects} />
          <Route path='/testimonial' component={Testimonial} />
          <Route path='/contact' component={Contact} />
          <Route component={Error404} />
        </Switch>
      </div>
    </React.Fragment>
  )
}

export default LoadTemplate;