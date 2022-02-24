import React from 'react';
import { Helmet } from "react-helmet";

import LoramLipsum from '../../masterLayout/LoramLipsum';

const WebDevelopment = () => {
  return (
    <React.Fragment>
      <Helmet> <title>Services | Web Development</title> </Helmet>
      <div className='templateDescription'>
        <div className='page_title'><h4>Web Design & Development <small>Create and control your web identity with an enviable website.</small></h4></div>
        <div className='content'>
          <p>Your website is the first impression of your company and speaks volumes about your work, not just in terms of the information that it carries but more importantly through the experience it gives to website visitors. While getting a website designed & developed, you need a partner with an industry specific approach and creative zeal.</p>
          <p>We design and develop customized websites keeping in mind the specific requirements of our customers and establish their unique brand identity. Through uniquely designed pages, carefully selected images, compelling content on every page and intuitive navigation, we provide an immersive experience for users.</p>

          <div className='block_content'>
            <h6>Static Website</h6>
            <p>A static website contains Web pages with fixed content. ... Static sites are the most basic type of website and are the easiest to create. Unlike dynamic websites, they do not require any Web programming or database design. A static site can be built by simply creating a few HTML pages and publishing them to a Web server.</p>
          </div>
          <div className='block_content'>
            <h6>Dynamic Website</h6>
            <p>A server-side dynamic web page is a web page whose construction is controlled by an application server processing server-side scripts. In server-side scripting, parameters determine how the assembly of every new web page proceeds, including the setting up of more client-side processing.</p>
          </div>
          <div className='block_content'>
            <h6>WordPress Development</h6>
            <p>Our team of highly skilled developers have the ability to select the most appropriate WordPress templates for your business or can do the custom design and integrate it with WordPress to build websites which are fast, secure and deliver unbeatable performance.</p>
          </div>
          <div className='block_content'>
            <h6>Ecommerce Development</h6>
            <p>We provide the most appropriate ecommerce solutions for your business. From design and selection of right development platform i.e. Custom, Magento, WooComerce, or Shopify to other services, we are the one-stop-shop for all your ecommerce requirements.</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default WebDevelopment;