import React from 'react';
import {Helmet} from "react-helmet";
import SecondaryHeader from '../masterLayout/SecondaryHeader';
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <React.Fragment>
      <Helmet> <title>Contact</title> </Helmet>
      <SecondaryHeader page_title="Contact" />
      <div className="loadTemplate">
        <div className="contact">
          <div className="pageHeader">
            <h4>Let's Start Something big together</h4>
            <p>Accumsan mauris sed, lobortis sem. Morbi vitae turpis elit. Aenean nulla ipsum, rutrum a accumsan finibus, porttitor ut odio. Proin id tortor vel metus cursus feugiat. In ac ante eu libero pharetra faucibus.</p>
          </div>
          <div className="content_section">
            <div className="dataForm">
              <div className="data_row">
                <div className="inputField">
                  <label for="title">Name *</label>
                  <input type="text" placeholder="Ex: Leanne Graham" maxlength="150" />
                  <small className="help_text">Max 150 Characters Allowed</small>
                </div>
                <div className="inputField">
                  <label for="title">Email Address *</label>
                  <input type="text" placeholder="Ex: sincere@april.biz" maxlength="150" />
                  <small className="help_text">Max 150 Characters Allowed</small>
                </div>
              </div>
              <div className="data_row">
                <div className="inputField">
                  <label for="title">Mobile *</label>
                  <input type="text" placeholder="Ex: 7707368031" />
                  <small className="help_text">Dont prefix 0 or 91</small>
                </div>
                <div className="inputField">
                  <label for="title">Who are you ? *</label>
                  <div className="selectbox">
                    <select name="">
                      <option value="reseller">Reseller</option>
                      <option value="clients">Clients</option>
                    </select>
                  </div>
                  <small className="help_text">Are you a Reseller or Clients ?</small>
                </div>
              </div>
              <div className="data_row">
                <div className="inputField">
                  <label for="title">Message *</label>
                  <textarea name="" rows="5"></textarea>
                  <small className="help_text">Max 150 Characters Allowed</small>
                </div>
              </div>
              <div className="inputField">
                <input type="submit" value="Send Message" className="inputButton" />
              </div>
            </div>
            <div className="contact_type">
              <div className="item_box">
                <small>Location</small>
                <p>4031 Colonal Glenn Hwy Ste 100<br />Beavercreek, OH 45431</p>
              </div>
              <div className="item_box">
                <small>Phone</small>
                <span>+1 937 344 6241</span>
              </div>
              <div className="item_box">
                <small>Email</small>
                <span>contact@korfish.com</span>
              </div>
              <div className="item_box">
                <small>Explore</small>
                <ul>
                  <li><Link to="/services/">Services</Link></li>
                  <li><Link to="/solutions/">Solutions</Link></li>
                  <li><Link to="/testimonial/">Testimonial</Link></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="social_network">
            <div className="item"><Link to="https://www.facebook.com/" target="_blank"><i className="fa fa-facebook" aria-hidden="true"></i></Link></div>
            <div className="item"><Link to="https://twitter.com/?lang=en" target="_blank"><i className="fa fa-twitter" aria-hidden="true"></i></Link></div>
            <div className="item"><Link to="https://www.linkedin.com/signup" target="_blank"><i className="fa fa-linkedin" aria-hidden="true"></i></Link></div>
            <div className="item"><Link to="https://www.youtube.com/" target="_blank"><i className="fa fa-youtube-play" aria-hidden="true"></i></Link></div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Contact;