import React, { useState, useEffect } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/auth-context";
import { useDataContext } from "../../context/data-context";
import { toast } from "react-toastify";
import "./navbar.css";
const Navbar = () => {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { pathname } = useLocation();

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
  useEffect(() => {
    setIsSidebarOpen(false);
  }, [pathname]);

  return (
    <div>
      <div className='navbar'>
        <div className=' logo'>
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
        <span
          className='ham-bur cursor-pointer'
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
          {isSidebarOpen ? (
            <i class='far fa-times'></i>
          ) : (
            <i className='far fa-bars '></i>
          )}
        </span>
        <sidebar className={isSidebarOpen ? "navsidebar open" : "navsidebar"}>
          <span>
            <NavLink
              to='/'
              style={({ isActive }) => {
                return {
                  borderBottom: isActive ? "2px solid #00283b" : "0px",
                };
              }}>
              Home
            </NavLink>
          </span>
          <span>
            <NavLink
              to='/productListing'
              style={({ isActive }) => {
                return {
                  borderBottom: isActive ? "2px solid #00283b" : "0px",
                };
              }}>
              Product
            </NavLink>
          </span>
          <span>
            <NavLink
              to='/wishlist'
              style={({ isActive }) => {
                return {
                  borderBottom: isActive ? "2px solid #00283b" : "0px",
                };
              }}>
              Wishlist
            </NavLink>
          </span>
          <span>
            <NavLink
              to='/cart'
              style={({ isActive }) => {
                return {
                  borderBottom: isActive ? "2px solid #00283b" : "0px",
                };
              }}>
              Cart
            </NavLink>
          </span>
          <span>
            <NavLink to='/login'>Login/SignUp</NavLink>
          </span>
        </sidebar>
      </div>
    </div>
  );
};

export default Navbar;
