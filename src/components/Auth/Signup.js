import axios from "axios";
import React from "react";
import { useState } from "react";
import { useAuthContex } from "../../contex/auth-contex";
import "./auth.css";

const Signup = () => {
  const { authState, authDispatch } = useAuthContex();
  const [userDetail, setUserDetail] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  let name, value;
  const setUserDetailHandler = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUserDetail({ ...userDetail, [name]: value });
  };

  const submitUserDetail = async (e) => {
    e.preventDefault();
    if (userDetail.password === userDetail.confirmPassword) {
      try {
        const response = await axios.post(`/api/auth/signup`, userDetail);
        console.log("res", response);
        authDispatch({
          type: "SIGN_UP",
          payload: {
            token: response.data.encodedToken,
            userData: userDetail,
          },
        });
        localStorage.setItem("token", response.data.encodedToken);
        localStorage.setItem("user", JSON.stringify(response.data));
      } catch (err) {
        console.warn(err);
      }
    }
  };
  console.log(authState);
  return (
    <div>
      <section>
        <div className='auth-wrapper'>
          <div className='auth-card-wrapper'>
            <div className='auth-card'>
              <div className='heading-auth'>
                <h1>Sign up to Winter</h1>
              </div>
              <hr className='auth-card-hr' />
              <div>
                <form action='' className='auth-content'>
                  <label htmlFor='name'>
                    <h3>Enter Your Name</h3>
                  </label>
                  <input
                    placeholder='Enter Your Full Name'
                    type='text'
                    id='name'
                    name='name'
                    value={userDetail.name}
                    onChange={setUserDetailHandler}
                  />
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
                  <label htmlFor='pass'>
                    <h3>Enter Your Password</h3>
                  </label>
                  <input
                    placeholder='Enter Your Password'
                    type='password'
                    id='pass'
                    name='password'
                    value={userDetail.password}
                    onChange={setUserDetailHandler}
                  />
                  <label htmlFor='cpass'>
                    <h3>Confirm Your Password</h3>
                  </label>
                  <input
                    placeholder='Enter Your Password'
                    type='password'
                    id='cpass'
                    name='confirmPassword'
                    value={userDetail.confirmPassword}
                    onChange={setUserDetailHandler}
                  />
                  <button
                    className='btn primary submit-btn'
                    onClick={submitUserDetail}>
                    Create Account
                  </button>
                  <hr className='auth-card-hr' />
                </form>
                <p>
                  Already have account? <a href='#'> Login to your account</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Signup;

/*
{
  "firstName": "Adarsh",
      "lastName": "Balak",
      "email": "adarshbk@gmail.com",
      "password":"123"
  }
  */
