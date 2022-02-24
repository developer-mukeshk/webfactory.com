import React from "react";

const Footer = () => {
  return (
    <React.Fragment>
      <div className="footerWrap" id="footer">
        <div className="footer">
          <div>Copyright 2022 WEBFACTORY. All Rights Reserved</div>
          <div className="social_network">
            <span>Get Socila With Us</span>
            <a href="https://www.facebook.com/" target="_blank"><i class="fa fa-facebook" aria-hidden="true"></i></a>
            <a href="https://twitter.com/?lang=en" target="_blank"><i class="fa fa-twitter" aria-hidden="true"></i></a>
            <a href="https://www.linkedin.com/signup" target="_blank"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
            <a href="https://www.youtube.com/" target="_blank"><i class="fa fa-youtube-play" aria-hidden="true"></i></a>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Footer;