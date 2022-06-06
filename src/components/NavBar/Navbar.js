import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/auth-context";
import { useDataContext } from "../../context/data-context";
import { toast } from "react-toastify";
const Navbar = () => {
  const navigate = useNavigate();
  const notify = (msg) => toast(msg);
  const { authDispatch } = useAuthContext();
  const { dispatch } = useDataContext();
  const {
    authState: { token },
  } = useAuthContext();
  const clearTokenFromStorage = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    notify("You are logged out successfully");
    navigate("/");
    authDispatch({
      type: "LOG_OUT",
    });
    dispatch({ type: "LOG_OUT" });
  };

  return (
    <div>
      <div className='navbar'>
        <div className='brandname'>
          <h3>Winter Store</h3>
        </div>
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
                to='/wishlist'
                style={({ isActive }) => {
                  return {
                    borderBottom: isActive ? "2px solid #00283b" : "0px",
                  };
                }}>
                <i className='fas fa-heart'></i>
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/cart'
                style={({ isActive }) => {
                  return {
                    borderBottom: isActive ? "2px solid #00283b" : "0px",
                  };
                }}>
                <i className='fas fa-shopping-cart'></i>
              </NavLink>
            </li>
            <li>
              {token ? (
                <NavLink
                  to='/login'
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
                  to='/login'
                  style={({ isActive }) => {
                    return {
                      borderBottom: isActive ? "2px solid #00283b" : "0px",
                    };
                  }}>
                  <i className='fas fa-user-plus'></i>
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
