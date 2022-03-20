import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  let authToken = localStorage.getItem("token");

  const clearTokenFromStorage = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userDetail");
    navigate("/");
  };

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
              {authToken ? (
                <NavLink
                  to='/signup'
                  onClick={clearTokenFromStorage}
                  style={({ isActive }) => {
                    return {
                      borderBottom: isActive ? "2px solid #00283b" : "0px",
                    };
                  }}>
                  Logout
                </NavLink>
              ) : (
                <NavLink
                  to='/signup'
                  style={({ isActive }) => {
                    return {
                      borderBottom: isActive ? "2px solid #00283b" : "0px",
                    };
                  }}>
                  Signup
                </NavLink>
              )}
            </li>
          </ul>
        </nav>

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
