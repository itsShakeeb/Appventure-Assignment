import React from "react";
import cssStyle from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={cssStyle.FooterWrapper}>
      <div className={cssStyle.SectionContainer1}>
        <div>section</div>
        <div>section</div>
        <div>section</div>
        <div>section</div>
      </div>
      <div className={cssStyle.SectionContainer2}>
        <div>section</div>
        <div>section</div>
        <div>section</div>
        <div>section</div>
      </div>
      <div className={cssStyle.AddressSection}>
        <address>Address preview address text</address>
        <section>phone 0000000000</section>
        <section>email:example.gmail.com</section>
      </div>
      <div className={cssStyle.Socialmedia}>
        <i className='fa fa-facebook fa-2x' aria-hidden='true'></i>
        <i className='fa fa-instagram fa-2x' aria-hidden='true'></i>
        <i className='fa fa-twitter fa-2x' aria-hidden='true'></i>
      </div>
    </footer>
  );
};

export default Footer;
