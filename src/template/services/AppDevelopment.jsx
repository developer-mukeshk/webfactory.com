import React from 'react';
import { Helmet } from "react-helmet";

import LoramLipsum from '../../masterLayout/LoramLipsum';

const AppDevelopment = () => {
  return (
    <React.Fragment>
      <Helmet> <title>Services | App Development</title> </Helmet>
      <div className='templateDescription'>
        <div className='page_title'><h4>App Development <small>Expertise in developing wide range of mobile & tablet applications.</small></h4></div>
        <div className='content'>

          <div className='block_content'>
            <h6>Mobile UI Design</h6>
            <p>The Mobile UI Designs that we create offer an unmatched user experience with subtlety, beauty, and intuitiveness. Simplicity meets minimalism in all our UI designs. The interfaces we create offer a fresh and natural feel with zero distraction. Keeping the clutter to a minimum to obtain the simplest form of user experience forms the basis of our design philosophy.</p>
          </div>
          <div className='block_content'>
            <h6>Native App Development</h6>
            <p>Sterco Digitex is a best-in-class native iPhone and Android Mobile App development company in India. In a short span of time, Sterco Digitex has launched a wide range of B2B and B2C Apps catering to users across the globe. The team carries significant expertise in design and development of native apps, using iOS and Android SDK.</p>
          </div>
          <div className='block_content'>
            <h6>Mobile UI Design</h6>
            <p>Devising technology in favor of our clients’ business proposition, Sterco Digitex holds expertise in developing Hybrid Mobile Apps that combine best of both worlds- Native and HTML5 functionality. Sterco Digitex offers, range of user-friendly, rich-in-interface, visually optimized B2B, B2C Apps across major platforms- iOS, Android,.</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default AppDevelopment;