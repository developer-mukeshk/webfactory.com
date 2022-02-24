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
                 </div>
                <div className="inputField">
                  <label for="title">How Did You Hear About Us ? *</label>
                  <div className="selectbox">
                    <select name="">
                      <option value="reseller">Search Engine</option>
                      <option value="clients">Word of Mouth</option>
                      <option value="clients">Social (Facebook, LinkedIn, Twitter, etc.)</option>
                      <option value="clients">In-Person Events</option>
                      <option value="clients">Friends or Co-worker</option>
                      <option value="clients">Other</option>
                    </select>
                  </div>
                 </div>
              </div>
              <div className="data_row">
                <div className="inputField">
                  <label for="title">Message *</label>
                  <textarea name="" rows="5"></textarea>
                  <small className="help_text">Max 250 Characters Allowed</small>
                </div>
              </div>
              <div className="inputField">
                <input type="submit" value="Send Message" className="inputButton" />
              </div>
            </div>
            <div className="contact_type">
              <div className="item_box">
                <small>Location</small>
                <span>Delhi, India</span>
              </div>
              <div className="item_box">
                <small>Phone</small>
                <span>+1 9899 3544 63</span>
              </div>
              <div className="item_box">
                <small>WhatsApp</small>
                <span><a href="https://api.whatsapp.com/send?phone=919899354463" target="_blank"><i class="fa fa-whatsapp" aria-hidden="true"></i> Start Chat With Us</a></span>
              </div>
              <div className="item_box">
                <small>Email</small>
                <span>contact@webfactory.in</span>
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
        </div>
      </div>
    </React.Fragment>
  );
}

export default Contact;