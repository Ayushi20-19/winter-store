import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <div>
      <footer>
        <div className='footer-content'>
          <div className='brandname'>
            <h3 className='footer-heading'>Winter Store</h3>
          </div>
          <div className='footer-links'>
            <span>About Us</span>
            <span>Privacy Policy</span>
            <span>Blogs</span>
            <span>Contact Us</span>
          </div>
          <div className='footer-copyright'>
            Copyright © 2022 Winter Store. All Rights Reserved
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
