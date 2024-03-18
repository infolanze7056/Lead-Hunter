import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Login.css";
import LoginImg from "../../Images/login-img.png";
import axios from "axios";

function Login() {
  const navigate = useNavigate();

  const notifySuccess = (message) => toast.success(message);
  const notifyError = (message) => toast.error(message);

  // State variables for login form
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loginEmailError, setLoginEmailError] = useState(false);
  const [loginPasswordError, setLoginPasswordError] = useState(false);

  // State variables for signup form
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setPhoneNumber] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [phonenumberError, setPhonenumberError] = useState(false);
  const [signupPasswordError, setSignupPasswordError] = useState(false);
  const [isLoginForm, setIsLoginForm] = useState(false);

  const handleLoginInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "loginEmail") {
      setLoginEmail(value);
      setLoginEmailError(value.length === 0);
    } else if (name === "loginPassword") {
      setLoginPassword(value);
      setLoginPasswordError(value.length === 0);
    }
  };

  const handleSignupInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "name":
        setName(value);
        setNameError(value.length === 0 || value.length <= 6);
        break;
      case "email":
        setEmail(value);
        setEmailError(value.length === 0);
        break;
      case "phonenumber":
        setPhoneNumber(value);
        setPhonenumberError(value.length === 0 || value.length <= 10);
        break;
      case "signupPassword":
        setSignupPassword(value);
        setSignupPasswordError(value.length <= 6);
        break;
      default:
        break;
    }
  };

  const handleLoginFormSubmit = async (e) => {
    e.preventDefault();
    // Validation for login form fields
    if (!loginEmail || !loginPassword) {
      setLoginEmailError(!loginEmail);
      setLoginPasswordError(!loginPassword);
      return;
    }
    // Send login request to the API
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        {
          email: loginEmail,
          password: loginPassword,
        }
      );
      // Handle successful login
      console.log("Login successful", response.data);
      notifySuccess("Login successful");
      navigate("/dashboard");
    } catch (error) {
      console.error("Login failed", error);
      notifyError("Login failed");
      // Handle login error
    }
  };

  const handleSignupFormSubmit = async (e) => {
    e.preventDefault();
    // Validation for signup form fields
    if (!name || !email || !phonenumber || !signupPassword) {
      setNameError(!name);
      setEmailError(!email);
      setPhonenumberError(!phonenumber);
      setSignupPasswordError(!signupPassword);
      return;
    }
    // Send signup request to the API
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/register",
        {
          name,
          email,
          phonenumber,
          password: signupPassword,
        }
      );
      // Handle successful signup
      console.log("Signup successful", response.data);
      notifySuccess("Signup successful");
      navigate("/dashboard");
    } catch (error) {
      console.error("Signup failed", error);
      notifyError("Signup failed");
      // Handle signup error
    }
  };

  const handleSwitchForm = () => {
    setIsLoginForm(!isLoginForm);
  };

  return (
    <div className="bg-[--main-color]">
    {/* <ToastContainer />   */}
      <div className="container mx-auto font-family">
        <section id="formHolder">
          <div className="grid lg:grid-cols-2 md:grid-cols-1">
            {/* Brand Box */}
            <div className=" brand">
              <div className="text-center lg:pt-20 pt-5 pb-5">
                <div className="text-4xl">Welcome to the Lead Hunter</div>
                <div>
                  <img className="w-72 mx-auto" src={LoginImg} alt="img" />
                </div>
                <div className="text-sm">Login / Registration</div>
              </div>
            </div>

            {/* Form Box */}
            <div className="form">
              {/* Login Form */}
              <div className={`login form-peice ${isLoginForm ? "switched" : ""}`}>
                <form className="login-form" onSubmit={handleLoginFormSubmit}>
                  <div className="form-group">
                    <label htmlFor="loginemail">Email Address</label>
                    <input
                      type="email"
                      name="loginEmail"
                      id="loginemail"
                      value={loginEmail}
                      onChange={handleLoginInputChange}
                      required
                    />
                    {loginEmailError && (
                      <span className="error">Please enter your email address</span>
                    )}
                  </div>
                  <div className="form-group">
                    <label htmlFor="loginPassword">Password</label>
                    <input
                      type="password"
                      name="loginPassword"
                      id="loginPassword"
                      value={loginPassword}
                      onChange={handleLoginInputChange}
                      required
                    />
                    {loginPasswordError && (
                      <span className="error">Please enter your password</span>
                    )}
                  </div>
                  <div className="CTA">
                    <input className="button_1" type="submit" value="Login" />
                    <div className="text-sm pt-2 flex justify-center">
                      Don't have an account?&nbsp;
                      <div
                        className="switch hover:cursor-pointer hover:text-red-600"
                        onClick={handleSwitchForm}
                      >
                        Sign Up
                      </div>
                    </div>
                  </div>
                </form>
              </div>

              {/* Signup Form */}
              <div className={`signup form-peice ${isLoginForm ? "" : "switched"}`}>
                <form className="signup-form" onSubmit={handleSignupFormSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={name}
                      onChange={handleSignupInputChange}
                      required
                    />
                    {nameError && (
                      <span className="error">Please enter your full name</span>
                    )}
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={email}
                      onChange={handleSignupInputChange}
                      required
                    />
                    {emailError && (
                      <span className="error">Please enter your email address</span>
                    )}
                  </div>
                  <div className="form-group">
                    <label htmlFor="phonenumber">Phone Number</label>
                    <input
                      type="text"
                      name="phonenumber"
                      id="phonenumber"
                      value={phonenumber}
                      onChange={handleSignupInputChange}
                      required
                    />
                    {phonenumberError && (
                      <span className="error">Please enter your phone number</span>
                    )}
                  </div>
                  <div className="form-group">
                    <label htmlFor="signupPassword">Password</label>
                    <input
                      type="password"
                      name="signupPassword"
                      id="signupPassword"
                      value={signupPassword}
                      onChange={handleSignupInputChange}
                      required
                    />
                    {signupPasswordError && (
                      <span className="error">Password must be at least 8 characters</span>
                    )}
                  </div>
                  <div className="CTA">
                    <input className="button_1" type="submit" value="Sign Up" />
                    <div className="text-sm pt-2 flex justify-center">
                      Already have an account?&nbsp;
                      <div
                        className="switch hover:cursor-pointer hover:text-red-600"
                        onClick={handleSwitchForm}
                      >
                        Login
                      </div>
                    </div>
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
