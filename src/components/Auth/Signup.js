import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/auth-context";
import "./auth.css";
import { toast } from "react-toastify";
const Signup = () => {
  const navigateHome = useNavigate();
  const notify = (msg) => toast(msg);
  const { authDispatch } = useAuthContext();
  const [userDetail, setUserDetail] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const setUserDetailHandler = (e) => {
    const { name, value } = e.target;
    setUserDetail({ ...userDetail, [name]: value });
  };

  const submitUserDetail = async (e) => {
    e.preventDefault();
    if (userDetail.password === userDetail.confirmPassword) {
      try {
        const response = await axios.post("/api/auth/signup", {
          email: userDetail.email,
          password: userDetail.password,
        });

        authDispatch({
          type: "SIGN_UP",
          payload: {
            token: response.data.encodedToken,
            userData: userDetail,
          },
        });
        if (response.status === 201) {
          navigateHome("/");
          setUserDetail({
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
          });
          notify("Account created, successfully");
          localStorage.setItem("token", response.data.encodedToken);
          localStorage.setItem("user", JSON.stringify(response.data));
        }
      } catch (err) {
        notify("User Already Exist");
      }
    } else {
      notify("Password does not match");
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
                <h1>Sign up to Winter Store</h1>
              </div>
              <hr className='auth-card-hr' />
              <div>
                <form
                  action=''
                  className='auth-content'
                  onSubmit={submitUserDetail}>
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
                    required
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
                    required
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
                    required
                  />
                  <label htmlFor='confirmPassword'>
                    <h3>Confirm Your Password</h3>
                  </label>
                  <input
                    placeholder='Enter Your Password'
                    type='password'
                    id='confirmPassword'
                    name='confirmPassword'
                    value={userDetail.confirmPassword}
                    onChange={setUserDetailHandler}
                    required
                  />
                  <button type='submit' className='btn primary submit-btn'>
                    Create Account
                  </button>
                  <hr className='auth-card-hr' />
                </form>
                <p>
                  Already have account?
                  <Link to='/login'> Login to your account</Link>
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
