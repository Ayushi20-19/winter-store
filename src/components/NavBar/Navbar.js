import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <div class='navbar'>
        <h5 class='logo'>LOGO</h5>
        <nav>
          <ul>
            <li>
              <NavLink to='/'>Home</NavLink>
            </li>
            <li>
              <NavLink to='/Product'>Product</NavLink>
            </li>
            <li>
              <NavLink to='/auth'>Login/SignUp</NavLink>
            </li>
          </ul>
        </nav>
        <a className='ham-burger' onclick='sideBarShow()'>
          <i className='fa fa-bars'></i>
        </a>
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
