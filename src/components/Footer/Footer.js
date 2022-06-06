import React from "react";
import { useNavigate } from "react-router-dom";
import "./footer.css";
const Footer = () => {
  const navigate = useNavigate();
  return (
    <div>
      <footer>
        <div className='footer-content'>
          <div className='brandname'>
            <h3 className='footer-heading'>Winter Store</h3>
          </div>
          <div className='footer-links'>
            <span className='cursor-pointer' onClick={() => navigate("/")}>
              About Us
            </span>
            <span className='cursor-pointer' onClick={() => navigate("/")}>
              Privacy Policy
            </span>
            <span className='cursor-pointer' onClick={() => navigate("/")}>
              Blogs
            </span>
            <span className='cursor-pointer' onClick={() => navigate("/")}>
              Contact Us
            </span>
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
