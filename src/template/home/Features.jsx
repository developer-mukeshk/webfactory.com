import React from 'react';

const Features = () => {
  return (
    <React.Fragment>
      <div className="features">
        <div className="container">
          <div className="title">
            <span>Amazing Features</span>
            <h3>- BEST WEBSITE WITH TONS OF FEATURES - </h3>
            <p>In addition to design, a business website should offer the right features for its users. Although professional web design is important, usability of the website is crucial to its success. A professional website should be rich with features and allow customers to interact with the business.</p>
          </div>
          <div className="featureWrap">
            <div className="item" data-aos="fade-up">
              <span class="fa fa-mobile"></span>
              <h5>Mobile Optimized</h5>
              <p>Mobile optimized means that the site will reformat itself for a list of handheld or tablet</p>
            </div>
            <div className="item" data-aos="fade-down">
              <span className="fa fa-file-code-o"></span>
              <h5>Clean Code</h5>
              <p>Combines the HTML Tidy, CSS Tidy, JS Beautify to effortlessly clean up code.</p>
            </div>
            <div className="item" data-aos="fade-up">
              <span className="fa fa-cogs"></span>
              <h5>Easy to Customized</h5>
              <p>Get fast and easy access to the features you use most by using "Customize" panel</p>
            </div>
            <div className="item" data-aos="fade-down">
              <span className="fa fa-envelope"></span>
              <h5>Full Support</h5>
              <p>Support is a range of customer services to assist customers in making cost effective.</p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Features;