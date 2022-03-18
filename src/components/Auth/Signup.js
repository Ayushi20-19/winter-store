import React from "react";
import "./auth.css";
const Signup = () => {
  return (
    <div>
      <section>
        <div class='auth-wrapper'>
          <div class='auth-card-wrapper'>
            <div class='auth-card'>
              <div class='heading-auth'>
                <h1>Sign up to Winter</h1>
              </div>
              <hr class='auth-card-hr' />
              <div>
                <form action='' class='auth-content'>
                  <h3>Enter Your Name</h3>
                  <input placeholder='Enter Your Full Name' type='text' />
                  <h3>Enter Your Email</h3>
                  <input placeholder='Enter Your Email' type='email' />
                  <h3>Enter Your Password</h3>
                  <input placeholder='Enter Your Password' type='password' />
                  <h3>Confirm Your Password</h3>
                  <input placeholder='Enter Your Password' type='password' />
                  <button class='btn primary'>Create Account</button>
                  <hr class='auth-card-hr' />
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
