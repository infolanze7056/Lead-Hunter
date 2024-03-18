import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import LoginImg from "../../Images/login-img.png";
import axios from "axios";

function Login() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setPhoneNumber] = useState("")
  const [password, setPassword] = useState("");
  // const [passwordConfirm, setPasswordConfirm] = useState("");
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [phonenumberError, setPhonenumberError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  // const [passwordConfirmError, setPasswordConfirmError] = useState(false);
  const [isLoginForm, setIsLoginForm] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
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
      case "password":
        setPassword(value);
        setPasswordError(value.length <= 6);
        break;
      // case "passwordConfirm":
      //   setPasswordConfirm(value);
      //   setPasswordConfirmError(value !== password);
      //   break;
      default:
        break;
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    // Reset previous errors
    setNameError(false);
    setEmailError(false);
    setPhonenumberError(false);
    setPasswordError(false);
    // setPasswordConfirmError(false);
    setError(null);

    if (isLoginForm) {
      // Login form submission
      try {
        const response = await axios.post(
          "http://localhost:5000/api/auth/login",
          {
            email,
            password,
          }
        );
        // Handle successful login
        console.log("Login successful", response.data);
        navigate("/dashboard");
      } catch (error) {
        setError(error.message || "Login failed");
      }
    } else {
      // Signup form submission
      // Validate form fields
      if (!name || !email || !phonenumber || !password ) {
        setNameError(!name);
        setEmailError(!email);
        setPhoneNumber(!phonenumber);
        setPasswordError(!password);
        // setPasswordConfirmError(!passwordConfirm);
        return;
      }
      // if (password !== passwordConfirm) {
      //   setPasswordConfirmError(true);
      //   return;
      // }
      
      // Send signup request to the API
      try {
        const response = await axios.post(
          "http://localhost:5000/api/auth/register",
          {
            name,
            email,
            phonenumber,
            password,
          }
        );
        // Handle successful signup
        console.log("Signup successful", response.data);
        navigate("/dashboard");
      } catch (error) {
        setError(error.message || "Signup failed");
      }
    }
  };

  const handleSwitchForm = () => {
    setIsLoginForm(!isLoginForm);
    setName("");
    setEmail("");
    setPhoneNumber("");
    setPassword("");
    // setPasswordConfirm("");
    setNameError(false);
    setEmailError(false);
    setPhonenumberError(false);
    setPasswordError(false);
    // setPasswordConfirmError(false);
    setError(null);
  };

  return (
    <div className="bg-[--main-color]">
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
              <div
                className={`signup form-peice ${isLoginForm ? "" : "switched"}`}
              >
                <form className="signup-form" onSubmit={handleFormSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={name}
                      onChange={handleInputChange}
                    />
                    {nameError && (
                      <span className="error">Please type your full name</span>
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
                    />
                    {emailError && (
                      <span className="error">
                        Please type your email address
                      </span>
                    )}
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="text"
                      name="phonenumber"
                      id="phone"
                      value={phonenumber}
                      onChange={handleInputChange}
                    />
                    {phonenumberError && (
                      <span className="error">
                        Please type your number
                      </span>
                    )}
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      value={password}
                      onChange={handleInputChange}
                    />
                    {passwordError && (
                      <span className="error">
                        Please type at least 8 characters
                      </span>
                    )}
                  </div>
                  {/* <div className="form-group">
                    <label htmlFor="passwordCon">Confirm Password</label>
                    <input
                      type="password"
                      name="passwordConfirm"
                      id="passwordCon"
                      value={passwordConfirm}
                      onChange={handleInputChange}
                    />
                    {passwordConfirmError && (
                      <span className="error">Passwords don't match</span>
                    )}
                  </div>
                  {error && <div className="error">{error}</div>} */}
                  <div className="CTA">
                    <input
                      type="submit"
                      className="button_1"
                      value="Sign Up"
                      id="submit"
                    />
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

