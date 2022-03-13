import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <div>
      {" "}
      <footer>
        <div class='footer-content'>
          <div class='brandname'>
            <h3 class='footer-heading'>Winter Store</h3>
          </div>
          <div class='footer-links'>
            <span>About Us</span>
            <span>Privacy Policy</span>
            <span>Blogs</span>
            <span>Contact Us</span>
          </div>
          <div class='footer-copyright'>
            Copyright © 2022 Winter Store. All Rights Reserved
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
