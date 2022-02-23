import React from 'react';
import {Helmet} from "react-helmet";
import SecondaryHeader from '../masterLayout/SecondaryHeader';

import clientList from './API/clientList';

const Projects = () => {
  return (
    <React.Fragment>
      <Helmet> <title>Projects</title> </Helmet>
      <SecondaryHeader page_title="Projects" />
      <div className="loadTemplate portfolio">
        {clientList.map((val) => {
          return (
            <div class="item">
              <div class="imgBox">
                <img src={require("../assets/images/clients/" + val.img)} alt="" />
              </div>
              <div class="detailBox">
                <h5>{val.name}</h5>
                <span>{val.shortintro}</span>
                <p>{val.detail}</p>
              </div>
            </div>
          )
        })}
      </div>
    </React.Fragment>
  );
}

export default Projects;