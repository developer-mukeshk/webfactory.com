import React from 'react';
import { Helmet } from "react-helmet";

import LoramLipsum from '../../masterLayout/LoramLipsum';

const Ecommerce = () => {
  return (
    <React.Fragment>
      <Helmet> <title>Solutions | Ecommerce Solution</title> </Helmet>
      <div className='templateDescription'>
        <div className='page_title'><h4>Ecommerce Solution <small>Online retail is the need of the hour.</small></h4></div>
        <div className='content'>
          <p>We provide the most appropriate ecommerce solutions for your business. From design and selection of right development platform i.e. Custom, Magento, WooComerce, or Shopify to other services, we are the one-stop-shop for all your ecommerce requirements.</p>
          <p>Convert your visitors into customers with E-Commerce solutions by Sterco. Our robust ecommerce solutions have helped businesses achieve online retail grip.</p>
          <p>We provides e-commerce website designing and development solutions for you. Being a preferred and trusted e-commerce website development company, Sterco develops websites with a user friendly interface, attractive look and feel and easy to manage backend. The Ecommerce websites developed by Sterco Digitex are as close as you get to the future of online shopping. </p>
          <div className='block_content'>
            <h6>Magento Development</h6>
            <p>Our team of certified Magento developers provides highly functional & stable ecommerce solutions. They are equally capable of working on custom designs or selecting standard templates to set up your online stores with all the features, offering you unmatched flexibility and control of your online stores.</p>
          </div>

          <div className='block_content'>
            <h6>WooCommerce Development</h6>
            <p>Our qualified team of WooCommerce developers choose the right templates to create intuitive, extendable, fast, and secure online stores. Our WooCommerce solutions offer enhanced design flexibility, customization control and a robust CMS.</p>
          </div>

          <div className='block_content'>
            <h6>Shopify Development</h6>
            <p>As a hosted solution, Shopify is not only fast and secure but it also provides wide range of themes, mobile readiness, multiple payment gateways and much more. Our team of solution engineers build functionally efficient and cost effective Shopify sites for your business.</p>
          </div>

          <div className='block_content'>
            <h6>Custom Development</h6>
            <p>We specialize in custom e-commerce development, enabling our clients to have flexibility and full control over their website. Our future-ready, custom-designed e-commerce sites offer a superior ease of buying experience, enhanced look and feel, and integrated SEO and online marketing tools.</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Ecommerce;