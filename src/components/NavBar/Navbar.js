import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <div className='navbar'>
        <h5 className='logo'>LOGO</h5>
        <nav>
          <ul>
            <li>
              <NavLink
                to='/'
                style={({ isActive }) => {
                  return {
                    borderBottom: isActive ? "2px solid #00283b" : "0px",
                  };
                }}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/productListing'
                style={({ isActive }) => {
                  return {
                    borderBottom: isActive ? "2px solid #00283b" : "0px",
                  };
                }}>
                Product
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/auth'
                style={({ isActive }) => {
                  return {
                    borderBottom: isActive ? "2px solid #00283b" : "0px",
                  };
                }}>
                Login/SignUp
              </NavLink>
            </li>
          </ul>
        </nav>
        {/* <a className='ham-burger' onClick='sideBarShow()'>
          <i className='fa fa-bars'></i>
        </a> */}
        <sidebar className='navsidebar'>
          <span>
            <NavLink to='/home'>Home</NavLink>
          </span>
          <span>
            <NavLink to='/product'>Product</NavLink>
          </span>
          <span>
            <NavLink to='/auth'>Login/SignUp</NavLink>
          </span>
        </sidebar>
      </div>
    </div>
  );
};

export default Navbar;
