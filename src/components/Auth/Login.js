import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/auth-context";

import "./auth.css";
const Login = () => {
  const navigateHome = useNavigate();
  const { authDispatch } = useAuthContext();
  const [userDetail, setUserDetail] = useState({
    email: "",
    password: "",
  });
  const testUser = {
    email: "testuser@gmail.com",
    password: "testuser123",
  };
  const setUserDetailHandler = (e) => {
    const { name, value } = e.target;
    setUserDetail({ ...userDetail, [name]: value });
  };
  const testCredentials = (e) => {
    e.preventDefault();
    setUserDetail(testUser);
  };
  const submitUserDetail = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/auth/login", {
        email: userDetail.email,
        password: userDetail.password,
      });

      if (response.status === 200) {
        localStorage.setItem("token", response.data.encodedToken);
        localStorage.setItem("user", JSON.stringify(response.data));
        navigateHome("/productListing");
        authDispatch({
          type: "LOG_IN",
          payload: {
            token: response.data.encodedToken,
            userData: userDetail,
          },
        });
      }
    } catch (err) {
      console.warn(err);
    }
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <section>
        <div className='auth-wrapper'>
          <div className='auth-card-wrapper'>
            <div className='auth-card'>
              <div className='heading-auth'>
                <h1>Login in to Winter</h1>
              </div>
              <hr className='auth-card-hr' />
              <div>
                <form action='' className='auth-content' method='post'>
                  <label htmlFor='email'>
                    <h3>Enter Your Email</h3>
                  </label>
                  <input
                    placeholder='Enter Your Email'
                    type='email'
                    id='email'
                    name='email'
                    value={userDetail.email}
                    onChange={setUserDetailHandler}
                  />
                  <label htmlFor='password'>
                    <h3>Enter Your Password</h3>
                  </label>
                  <input
                    placeholder='Enter Your Password'
                    type='password'
                    id='password'
                    name='password'
                    value={userDetail.password}
                    onChange={setUserDetailHandler}
                  />
                  <a href=''>
                    <p>Forget Password</p>
                  </a>
                  <button
                    className='btn primary-outline submit-btn'
                    onClick={testCredentials}>
                    Test Credentials
                  </button>
                  <button
                    className='btn primary submit-btn'
                    onClick={submitUserDetail}>
                    Login
                  </button>
                  <hr className='auth-card-hr' />
                </form>
                <p>
                  Not a user yet? <Link to='/signup'>Create your account</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
