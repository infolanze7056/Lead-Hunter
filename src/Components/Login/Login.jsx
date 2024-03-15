import React, { useState } from "react";
import "./Login.css";
import LoginImg from "../../Images/login-img.png";

function Login() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [usernameError, setUsernameError] = useState(true);
  const [emailError, setEmailError] = useState(true);
  const [passwordError, setPasswordError] = useState(true);
  const [passwordConfirmError, setPasswordConfirmError] = useState(true);
  const [isLoginForm, setIsLoginForm] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "username":
        setUsername(value);
        setUsernameError(value.length === 0 || value.length <= 6);
        break;
      case "email":
        setEmail(value);
        setEmailError(value.length === 0);
        break;
      case "password":
        setPassword(value);
        setPasswordError(value.length < 8);
        break;
      case "passwordConfirm":
        setPasswordConfirm(value);
        setPasswordConfirmError(value !== password);
        break;
      default:
        break;
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (usernameError || emailError || passwordError || passwordConfirmError) {
      // Handle form errors
      if (!username) setUsernameError(true);
      if (!email) setEmailError(true);
      if (!password) setPasswordError(true);
      if (!passwordConfirm) setPasswordConfirmError(true);
      return;
    } else {
    // Form submission logic
    setIsLoginForm(false);
    setTimeout(() => {
      // Additional actions after successful form submission
      console.log("Form submitted successfully");
    }, 1500);
  };
};

  const handleSwitchForm = () => {
    setIsLoginForm(!isLoginForm);
    setUsername("");
    setEmail("");
    setPassword("");
    setPasswordConfirm("");
    setUsernameError(false);
    setEmailError(false);
    setPasswordError(false);
    setPasswordConfirmError(false);
  };



  return (
    <div className="  bg-[--main-color]">
      <div className="container mx-auto font-family">
        <section id="formHolder">
          <div className="grid lg:grid-cols-2 md:grid-cols-1">
            {/* Brand Box */}
            <div className=" brand">
              <div className="text-center lg:pt-20 pt-5 pb-5">
                  <div className="text-4xl">Welcome to the Lead Hunter</div>
                  <div><img className="w-72 mx-auto" src={LoginImg} alt="img" /></div>
                  <div className="text-sm">Login / Registration</div>
              </div>
            </div>

            {/* Form Box */}
            <div className="form">
              {/* Login Form */}
              <div className={`login form-peice ${isLoginForm ? "switched" : ""}`} >
                <form className="login-form" onSubmit={handleFormSubmit}>
                  <div className="form-group">
                    <label htmlFor="loginemail">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      id="loginemail"
                      value={email}
                      onChange={handleInputChange}
                      required
                    />
                    {emailError && (
                      <span className="error">
                        Please type your email address
                      </span>
                    )}
                  </div>
                  <div className="form-group">
                    <label htmlFor="loginPassword">Password</label>
                    <input
                      type="password"
                      name="password"
                      id="loginPassword"
                      value={password}
                      onChange={handleInputChange}
                      required
                    />
                    {passwordError && (
                      <span className="error">
                        Please type at least 8 characters
                      </span>
                    )}
                  </div>
                  <div className="CTA">
                    <input className="button_1" type="submit" value="Login" />
                    <div className="text-sm pt-2 flex justify-center">Don't have an account?&nbsp;<div className="switch hover:cursor-pointer hover:text-red-600" onClick={handleSwitchForm}>
                      Sign Up
                    </div></div>
                    
                  </div>
                </form>
                
              </div>

              {/* Signup Form */}
              <div
                className={`signup form-peice ${isLoginForm ? "" : "switched"}`}
              >
                <form className="signup-form" onSubmit={handleFormSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input
                      type="text"
                      name="username"
                      id="name"
                      value={username}
                      onChange={handleInputChange}
                     //  onFocus={handleFocus}
                      className="name"
                    />
                    {usernameError && (
                      <span className="error">
                        Please type your full name
                      </span>
                    )}
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={email}
                      onChange={handleInputChange}
                      className="email"
                    />
                    {emailError && (
                      <span className="error">
                        Please type your email address
                      </span>
                    )}
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">
                      Phone Number - <small>Optional</small>
                    </label>
                    <input type="text" name="phone" id="phone" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      value={password}
                      onChange={handleInputChange}
                      className="pass"
                    />
                    {passwordError && (
                      <span className="error">
                        Please type at least 8 characters
                      </span>
                    )}
                  </div>
                  <div className="form-group">
                    <label htmlFor="passwordCon">Confirm Password</label>
                    <input
                      type="password"
                      name="passwordConfirm"
                      id="passwordCon"
                      value={passwordConfirm}
                      onChange={handleInputChange}
                      className="passConfirm"
                    />
                    {passwordConfirmError && (
                      <span className="error">Passwords don't match</span>
                    )}
                  </div>
                  <div className="CTA">
                    <input type="submit" className="button_1" value="Sign Up" id="submit" />
                    <div className="text-sm pt-2 flex justify-center">Already have an account?&nbsp;<div className="switch hover:cursor-pointer hover:text-red-600" onClick={handleSwitchForm}>
                      Login
                    </div></div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Login;
