import React, { useState } from "react";
import "./Login.css";

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
    if (name === "username") {
      setUsername(value);
      if (value.length === 0 || (value.length > 1 && value.length <= 6)) {
        setUsernameError(true);
      } else {
        setUsernameError(false);
      }
    } else if (name === "email") {
      setEmail(value);
      setEmailError(value.length === 0);
    } else if (name === "password") {
      setPassword(value);
      setPasswordError(value.length < 8);
    } else if (name === "passwordConfirm") {
      setPasswordConfirm(value);
      setPasswordConfirmError(value !== password);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (usernameError || emailError || passwordError || passwordConfirmError) {
      // Handle form errors
      return;
    }
    // Form submission logic
    setIsLoginForm(false);
    setTimeout(() => {
      // Additional actions after successful form submission
      console.log("Form submitted successfully");
    }, 1500);
  };

  const handleSwitchForm = () => {
    setIsLoginForm(!isLoginForm);
  };

  const handleProfileClick = () => {
    window.location.reload(true);
  };



  return (
    <div className="">
      <div className="container mx-auto font-family">
        <section id="formHolder">
          <div className="grid lg:grid-cols-2 md:grid-cols-1">
            {/* Brand Box */}
            <div className=" brand">
              <a href="#" className="logo">
                MR <span>.</span>
              </a>
              <div className="heading">
                <h2>Marina</h2>
                <p>Your Right Choice</p>
              </div>
              {isLoginForm ? null : (
                <div className="success-msg">
                  <p>Great! You are one of our members now</p>
                  <a href="#" className="profile" onClick={handleProfileClick}>
                    Your Profile
                  </a>
                </div>
              )}
            </div>

            {/* Form Box */}
            <div className="form">
              {/* Login Form */}
              <div
                className={`login form-peice ${isLoginForm ? "switched" : ""}`}
              >
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
                    <input type="submit" value="Login" />
                    <a href="#" className="switch" onClick={handleSwitchForm}>
                      I'm New
                    </a>
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
                      className="name"
                    />
                    {usernameError && (
                      <span className="error">
                        Please type your full name (at least 6 characters)
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
                    <input type="submit" value="Signup Now" id="submit" />
                    <a href="#" className="switch" onClick={handleSwitchForm}>
                      I have an account
                    </a>
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
