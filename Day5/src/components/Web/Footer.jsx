import React from 'react';

import './Footer.css';

function Footer () {

  return (
    <section className="footer">
      <hr className="footer-seperator" />
      <section className="footer-social-media">
        <a href="/" target="_blank" rel="noopener noreferrer">Good fortune is what happens when opportunity meets with planning.</a>
      </section>
      <section className="footer-info">
        <section className="footer-info-left">
          <section className="footer-info__name">
              Spark Event 
          </section>
          <section className="footer-info__returns">
            Returns Policy
            <br />
            Delivery
          </section>        
        </section>
        <section className="footer-info-center">
          <section className="footer-info__email">
            sparkevent@gmail.com 
          </section>
          <section className="footer-info__terms">
            Terms and Conditions
            <br />
            Copyright
          </section>
        </section>
        <section className="footer-info-right">
          <section className="footer-info__number">
            Ph:044652865
          </section>
          <section className="footer-info__contact">
            Privacy Policy 
            <br />
            Contact Us
          </section>
        </section>
      </section>
      <hr className="footer-seperator" />
    </section>
  )

}

export default Footer;