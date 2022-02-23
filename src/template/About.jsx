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
          <p>Etiam mattis, mi nec pretium posuere, dui dolor viverra nibh, ut pharetra nisl libero non velit. Maecenas viverra sollicitudin malesuada. Donec maximus, nisi eu finibus dignissim, ex tellus semper massa, ut viverra tortor leo sit amet risus. Ut ligula nibh, pellentesque id nisl non, lobortis faucibus quam. Nullam rhoncus ultricies dolor eget feugiat. Aenean blandit augue in elit porta, sed mollis mauris bibendum. Vestibulum vitae nibh sit amet lectus hendrerit hendrerit. Ut non nisi tortor. Suspendisse sagittis commodo augue quis scelerisque. Nunc augue neque, ultricies id ultricies nec, ultrices quis leo. Sed at posuere urna. Aliquam venenatis, nisi eget commodo hendrerit, augue turpis ornare neque, nec dapibus arcu risus et tortor. Aliquam non tempus ligula. Ut ac lectus eu sapien hendrerit bibendum.</p>
          <h5>WORKING PROCESS</h5>
          <p>Etiam mattis, mi nec pretium posuere, dui dolor viverra nibh, ut pharetra nisl libero non velit. Maecenas viverra sollicitudin malesuada. Donec maximus, nisi eu finibus dignissim, ex tellus semper massa, ut viverra tortor leo sit amet risus. Ut ligula nibh, pellentesque id nisl non, lobortis faucibus quam. Nullam rhoncus ultricies dolor eget feugiat. Aenean blandit augue in elit porta, sed mollis mauris bibendum. Vestibulum vitae nibh sit amet lectus hendrerit hendrerit.</p>
          <h5>DESIGN / DEVELOPMENT</h5>
          <p>Etiam mattis, mi nec pretium posuere, dui dolor viverra nibh, ut pharetra nisl libero non velit. Maecenas viverra sollicitudin malesuada. Donec maximus, nisi eu finibus dignissim, ex tellus semper massa, ut viverra tortor leo sit amet risus. Ut ligula nibh, pellentesque id nisl non, lobortis faucibus quam. Nullam rhoncus ultricies dolor eget feugiat. Aenean blandit augue in elit porta, sed mollis mauris bibendum. Vestibulum vitae nibh sit amet lectus hendrerit hendrerit.</p>
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