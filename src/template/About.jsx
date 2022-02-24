import React from 'react';
import {Helmet} from "react-helmet";
import { Link } from 'react-router-dom';
import SecondaryHeader from '../masterLayout/SecondaryHeader';

const About = () => {
  return (
    <React.Fragment>
      <Helmet> <title>About Us</title> </Helmet>
      <SecondaryHeader page_title="About Us" />
      <div className="loadTemplate about">
        <div className="description">
          <p>Having a cohesive digital strategy enables businesses to have a firmer grip on their target audience as they have an insightful awareness about the platforms their audiences prefer to spend time on. Plus, the capability to measure the performance of marketing tactics brings in cost-effectiveness in strategy and helps them identify the nonperforming areas.</p>

          <h5>WORKING PROCESS</h5>
          <p>Etiam mattis, mi nec pretium posuere, dui dolor viverra nibh, ut pharetra nisl libero non velit. Maecenas viverra sollicitudin malesuada. Donec maximus, nisi eu finibus dignissim, ex tellus semper massa, ut viverra tortor leo sit amet risus. Ut ligula nibh, pellentesque id nisl non, lobortis faucibus quam. Nullam rhoncus ultricies dolor eget feugiat. Aenean blandit augue in elit porta, sed mollis mauris bibendum. Vestibulum vitae nibh sit amet lectus hendrerit hendrerit.</p>

          <h5>DESIGN / DEVELOPMENT</h5>
          <p>Etiam mattis, mi nec pretium posuere, dui dolor viverra nibh, ut pharetra nisl libero non velit. Maecenas viverra sollicitudin malesuada. Donec maximus, nisi eu finibus dignissim, ex tellus semper massa, ut viverra tortor leo sit amet risus. Ut ligula nibh, pellentesque id nisl non, lobortis faucibus quam. Nullam rhoncus ultricies dolor eget feugiat. Aenean blandit augue in elit porta, sed mollis mauris bibendum. Vestibulum vitae nibh sit amet lectus hendrerit hendrerit.</p>
          
          <h5>DIGITAL STRATEGY <small>Making businesses rapidly adapt to changing circumstances</small></h5>
          <p>As a formidable branding and digital agency, we provide strategic value for companies, brands, and future-driven projects through digital strategies that are the key to any organization's future viability. Our digital strategy focuses on how businesses can ideate, innovate and create new strategies and business models to thrive in the digital age.</p>

          <h5>Finding an agency who understands your digital needs is hard.</h5>
          <p>Let our amazing team help you craft your digital strategy today.</p>
        </div>
        <div className="experties">
          <h2><small>AREA OF</small> EXPERTIES</h2>
          <div className="boxgroup">
            <div className="box">
              <h5>DESIGN -</h5>
              <p>Photoshop, Illustrator, Sketch 3, Kuler, Noun Project, Invision, Iconfinder, Flat UI, Coolors, Streamline, Origami</p>
            </div>
            <div className="box">
              <h5>DEVELOPMENT -</h5>
              <p>HTML, CSS3, Bootstrap, SASS, Javascript, jQuery, Node.js, Angular.js, Backbone.js, AJAX, cakePHP, Wordpress</p>
            </div>
            <div className="box">
              <h5>FEATURES -</h5>
              <ul>
                <li>Documentation</li>
                <li>Sticky Menu</li>
                <li>Animations</li>
                <li>Font And Icons</li>
                <li>Parallax Effects</li>
                <li>Social Integration</li>
                <li>Different Footers</li>
                <li>Documentation</li>
                <li>One/Multipage</li>
                <li>Lightbox</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="discussProject">
        <h4>- Discuss Project With Us - </h4>
        <p>Etiam mattis, mi nec pretium posuere, dui dolor viverra nibh, ut pharetra nisl libero non velit. Maecenasv viverra sollicitudin malesuada. Donec maximus, nisi eu finibus dignissim, ex tellus semper massa. </p>
        <Link to="/contact" className='button'><i class="fa fa-phone" aria-hidden="true"></i> Request A Call Back</Link>
      </div>
    </React.Fragment>
  );
}

export default About;