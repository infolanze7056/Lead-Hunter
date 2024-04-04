import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Login.css";
import LoginImg from "../../Images/6310507-Photoroom.png-Photoroom.png";
import { RiLoginBoxLine } from "react-icons/ri";
import { SiGnuprivacyguard } from "react-icons/si";
import axios from "axios";
import { IoClose } from "react-icons/io5";

function Login({ role }) {
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
  const [showPopup, setShowPopup] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState("");
  const [paymentStatusError, setPaymentStatusError] = useState(false);
  const [termsChecked, setTermsChecked] = useState(false);

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
      case "paymentStatus":
        setPaymentStatus(value);
        setPaymentStatusError(value.length === 0);
        break;
      default:
        break;
    }
  };

  const handleLoginFormSubmit = async (e) => {
    e.preventDefault();

    if (!loginEmail || !loginPassword) {
      setLoginEmailError(!loginEmail);
      setLoginPasswordError(!loginPassword);
      return;
    }

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/auth/payment`,
        {
          email: loginEmail,
          password: loginPassword,
        }
      );

      if (response.data.user === true) {
        console.log(response.data.payment_status, "sdfsdf");
        if (response.data.payment_status === "SUCCESSFUL") {
          // Handle successful login
          console.log("Login successful", response.data);
          const { token } = response.data;
          notifySuccess("Login successful");

          localStorage.setItem("token", token);
          const role = response.data.role;
          localStorage.setItem("role", role);

          setTimeout(() => {
            // Remove token after 10 minutes
            localStorage.removeItem("token");
            localStorage.removeItem("role");
            navigate("/register");
          }, 600000); // 10 minutes

          const tokenParts = token.split(".");
          const payload = JSON.parse(atob(tokenParts[1]));
          const currentTime = Math.floor(Date.now() / 1000);
          console.log("Token expiration time:", payload.exp);
          console.log("Current time:", currentTime);

          if (payload.exp < currentTime) {
            localStorage.removeItem("token");
            localStorage.removeItem("role");
            navigate("/register");
          } else {
            const role = response.data.role; // Extract role from response data
            console.log("Role:", role);
            // Redirect based on role
            if (role && role === "Admin") {
              navigate("/admin");
            } else {
              navigate("/dashboard");
            }
          }
        } else if (response.data.payment_status === "PENDING") {
          const paymentLink = response.data.payment_link; // Assuming 'payment_link' is the key for the generated payment link in the response data
          window.location.href = paymentLink;
        } else {
          // Handle other payment statuses
          console.log("Payment status is neither SUCCESSFUL nor PENDING");
          notifyError("Payment failed");
        }
      }
    } catch (error) {
      console.error("Login failed", error);
      notifyError("Login failed");
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
    handlePopup();
  };

  const handlePopup = () => {
    setShowPopup(true);
  };

  const handlePaymentSubmit = async () => {

    if (!termsChecked) {
      alert("Please agree to the Terms and Conditions.");
      return;
  }

    try {
      let amount;
      if (paymentStatus === "99") {
        amount = 99;
      } else if (paymentStatus === "999") {
        amount = 999;
      } else {
        setPaymentStatusError(true);
        return;
      }

      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/phonepe/payment`,
        {
          name,
          email,
          phonenumber,
          password: signupPassword,
          amount,
        }
      );

      // Check if response contains existence flag
      if (response.data.exist) {
        alert(response.data.exist); // Alert user about existence
      } else {
        // Handle successful signup
        console.log("Signup successful", response.data);
        notifySuccess("Signup successful");
        window.location.href = response.data;
        // navigate("/dashboard");
      }
    } catch (error) {
      console.error("Signup failed", error);
      notifyError("Signup failed");
      // Handle signup error
    }
  };

  const handleSwitchForm = () => {
    setIsLoginForm(!isLoginForm);
    setName("");
    setEmail("");
    setPhoneNumber("");
    setSignupPassword("");
    setLoginEmail("");
    setLoginPassword("");
  };

  return (
    <div className="bg-[--main-color]">
      {/* <ToastContainer />   */}
      <div className="container mx-auto font-family">
        <section id="formHolder">
          <div className="grid lg:grid-cols-2 md:grid-cols-1">
            {/* Brand Box */}
            <div className=" brand lg:rounded-md  rounded-b-md">
              <div className="text-center lg:pt-16 pt-5 pb-5">
                <div>
                  <img className="w-64 mx-auto" src={LoginImg} alt="img" />
                </div>
                <div className="lg:text-4xl text-3xl pt-3 text-[--three-color]">
                  Welcome to the Lead Hunter
                </div>
                <div className="text-sm font-semibold text-gray-600 pt-3">
                  Login / Registration
                </div>
              </div>
            </div>

            {/* Form Box */}
            <div className="form">
              {/* Login Form */}
              <div
                className={`login lg:rounded-md rounded-b-md form-peice ${
                  isLoginForm ? "switched" : ""
                }`}
              >
                <form className="login-form" onSubmit={handleLoginFormSubmit}>
                  <div className="text-center">
                    <div>
                      <SiGnuprivacyguard className="text-5xl mx-auto text-[--three-color]" />
                    </div>
                    <div className="text-3xl font-semibold pt-3 pb-4 uppercase">
                      Sign In
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="loginemail">Email Address :</label>
                    <input
                      type="email"
                      name="loginEmail"
                      id="loginemail"
                      className="shadow-sm input_1"
                      autoComplete="username"
                      value={loginEmail}
                      onChange={handleLoginInputChange}
                      required
                    />
                    {loginEmailError && (
                      <span className="error">
                        Please enter your email address
                      </span>
                    )}
                  </div>
                  <div className="form-group">
                    <label htmlFor="loginPassword">Password :</label>
                    <input
                      type="password"
                      name="loginPassword"
                      id="loginPassword"
                      autoComplete="current-password"
                      className="shadow-sm input_1"
                      value={loginPassword}
                      onChange={handleLoginInputChange}
                      required
                    />
                    {loginPasswordError && (
                      <span className="error">Please enter your password</span>
                    )}
                  </div>
                  <div className="text-end">
                    <NavLink
                      to="/forgot-password"
                      className="text-xs text-[--three-color] hover:text-gray-600"
                    >
                      Forgot Password?
                    </NavLink>
                  </div>
                  <div className="CTA">
                    <input
                      className="button_1 hover:cursor-pointer"
                      type="submit"
                      value="Login"
                    />
                    <div className="text-sm pt-4 flex justify-center">
                      Don't have an account?&nbsp;
                      <div
                        className="switch text-[--three-color] hover:cursor-pointer hover:text-red-600"
                        onClick={handleSwitchForm}
                      >
                        Sign Up
                      </div>
                    </div>
                  </div>
                </form>
              </div>

              {/* Signup Form */}

              {/* onSubmit={handleSignupFormSubmit} */}

              <div
                className={`signup lg:rounded-md rounded-b-md form-peice ${
                  isLoginForm ? "" : "switched"
                }`}
              >
                <form className="signup-form" onSubmit={handleSignupFormSubmit}>
                  <div className="text-center">
                    <div>
                      <RiLoginBoxLine className="text-5xl mx-auto text-[--three-color]" />
                    </div>
                    <div className="text-3xl font-semibold pt-2 pb-4 uppercase">
                      Sign Up
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="name">Full Name :</label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="shadow-sm input_1"
                      value={name}
                      onChange={handleSignupInputChange}
                      required
                    />
                    {nameError && (
                      <span className="error">Please enter your full name</span>
                    )}
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address :</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      autoComplete="username"
                      className="shadow-sm input_1"
                      value={email}
                      onChange={handleSignupInputChange}
                      required
                    />
                    {emailError && (
                      <span className="error">
                        Please enter your email address
                      </span>
                    )}
                  </div>
                  <div className="form-group">
                    <label htmlFor="phonenumber">Phone Number :</label>
                    <input
                      type="text"
                      name="phonenumber"
                      id="phonenumber"
                      className="shadow-sm input_1"
                      value={phonenumber}
                      onChange={handleSignupInputChange}
                      required
                    />
                    {phonenumberError && (
                      <span className="error">
                        Please enter your phone number
                      </span>
                    )}
                  </div>
                  <div className="form-group">
                    <label htmlFor="signupPassword">Password :</label>
                    <input
                      type="password"
                      name="signupPassword"
                      id="signupPassword"
                      className="shadow-sm input_1"
                      autoComplete="new-password"
                      value={signupPassword}
                      onChange={handleSignupInputChange}
                      required
                    />
                    {signupPasswordError && (
                      <span className="error">
                        Password must be at least 8 characters
                      </span>
                    )}
                  </div>
                  <div className="CTA">
                    <input
                      className="button_1 hover:cursor-pointer"
                      type="submit"
                      value="Sign Up"
                    />
                    {/* <button onClick={handlePopup}>Submit</button> */}
                    <div className="text-sm pt-3 flex justify-center">
                      Already have an account?&nbsp;
                      <div
                        className="switch text-[--three-color] hover:cursor-pointer hover:text-red-600"
                        onClick={handleSwitchForm}
                      >
                        Login
                      </div>
                    </div>
                  </div>
                  {showPopup && (
                    <div className="popup fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50 p-5 z-50">
                      <div className="bg-white rounded-md p-5">
                        <div className="justify-between flex pb-3">
                          <div className="text-lg">Choose Subscribtion:</div>
                          <button
                            className="hover:text-red-700"
                            onClick={() => setShowPopup(false)}
                          >
                            <IoClose className="text-xl" />
                          </button>
                        </div>
                        <div className="grid grid-cols-2 max-w-xl mx-auto gap-3">
                          <div className="border p-7 text-center rounded-md shadow-md">
                            <div className="text-3xl font-semibold">
                              99 <sub>/ INR</sub>
                            </div>
                            <div className="pt-2">
                              <input
                                type="checkbox"
                                checked={paymentStatus === "99"}
                                onChange={() => setPaymentStatus("99")}
                              />
                            </div>
                          </div>
                          <div className="border p-7 text-center rounded-md shadow-md">
                            <div className="text-3xl font-semibold">
                              999 <sub>/ INR</sub>
                            </div>
                            <div className="pt-2">
                              <input
                                type="checkbox"
                                checked={paymentStatus === "999"}
                                onChange={() => setPaymentStatus("999")}
                              />
                            </div>
                          </div>
                        </div>
                        {paymentStatusError && (
                          <span className="error">
                            Please select one option
                          </span>
                        )}
                        <div className="mt-3">
                          <label className="flex items-center">
                            <input
                              type="checkbox"
                              className="mr-2"
                              checked={termsChecked}
                              onChange={() => setTermsChecked(!termsChecked)}
                            />
                            <span className="text-sm">
                              I agree to the Terms and Conditions
                            </span>
                          </label>
                        </div>
                        <div className="CTA">
                          <button
                            className="button_1 p-1 px-3"
                            onClick={handlePaymentSubmit}
                            disabled={!termsChecked}
                          >
                            Submit Payment
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
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
