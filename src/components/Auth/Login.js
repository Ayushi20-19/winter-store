import React from "react";
import "./auth.css";
const Login = () => {
  return (
    <div>
      <section>
        <div class='auth-wrapper'>
          <div class='auth-card-wrapper'>
            <div class='auth-card'>
              <div class='heading-auth'>
                <h1>Login in to Winter</h1>
              </div>
              <hr class='auth-card-hr' />
              <div>
                <form action='' class='auth-content'>
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
                  <button class='btn primary-outline'>
                    Login With Test Credentials
                  </button>
                  <button class='btn primary'>Login</button>
                  <hr class='auth-card-hr' />
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
