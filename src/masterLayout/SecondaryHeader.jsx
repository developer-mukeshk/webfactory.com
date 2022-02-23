import React from 'react';

import banner from '../assets/images/factory-bg.jpg';

const SecondaryHeader = (props) => {
  return (
    <React.Fragment>
      <div class="secondaryHeader">
        <div class="page_title"><h1>{props.page_title}</h1></div>
        <img src={banner} alt="" />
      </div>
    </React.Fragment>
  );
}

export default SecondaryHeader;


