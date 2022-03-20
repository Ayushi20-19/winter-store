import React from "react";
import "./auth.css";
const Login = () => {
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
                <form action='' className='auth-content'>
                  <label for='email'>
                    <h3>Enter Your Email</h3>
                  </label>
                  <input
                    placeholder='Enter Your Email'
                    type='email'
                    id='email'
                  />
                  <label for='pwd'>
                    <h3>Enter Your Password</h3>
                  </label>
                  <input
                    placeholder='Enter Your Password'
                    type='password'
                    id='pwd'
                  />
                  <a href=''>
                    {" "}
                    <p>Forget Password</p>
                  </a>
                  <button className='btn primary-outline'>
                    Login With Test Credentials
                  </button>
                  <button className='btn primary'>Login</button>
                  <hr className='auth-card-hr' />
                </form>
                <p>
                  Not a user yet? <a href='#'>Create your account</a>
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
