import React, { useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { RiLockPasswordLine } from "react-icons/ri";
import { MdKey, MdVisibility, MdVisibilityOff } from "react-icons/md";

function ResetPassword() {
  const { userId, token } = useParams();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError('');
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    setPasswordError('');
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleSubmit = async () => {
    // Password validation logic
    if (password.trim() === '') {
      setPasswordError('Password is required.');
      return;
    }
    if (password !== confirmPassword) {
      setPasswordError('Passwords do not match.');
      return;
    }

    // Make API call to update password
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/passwordReset/${userId}/${token}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          password: password,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to update password');
      }

      // Password updated successfully
      console.log('Password updated successfully');
      setPassword("");
      setConfirmPassword("");
      setPasswordError("");
    } catch (error) {
      console.error('Error updating password:', error.message);
    }
  };

  return (
    <div className='bg-[--main-color] font-family'>
      <div className='lg:max-w-lg md:max-w-lg px-5 lg:py-20 md:py-10 py-10 mx-auto'>
        <div className='border rounded-md lg:p-10 md:p-10 p-5 py-10 text-center bg-white'>
          <div><RiLockPasswordLine className='text-6xl mx-auto text-[--three-color]' /></div>
          <div className='text-2xl font-semibold pt-5 pb-2'>Reset Password</div>
          <div className='text-sm text-gray-500'>Enter your email and we'll send you a link to reset your password.</div>
          <div className='pt-4 pb-5'>
            <div className="relative mt-2 rounded-md shadow-sm">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <span className="text-gray-500 sm:text-sm"><MdKey /></span>
              </div>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                value={password}
                onChange={handlePasswordChange}
                className="block w-full rounded-md border-0 py-1.5 ps-12 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Enter Your password"
              />
              <span className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer" onClick={togglePasswordVisibility}>
                {showPassword ? <MdVisibilityOff /> : <MdVisibility />}
              </span>
            </div>
            <div className="relative mt-4 rounded-md shadow-sm">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <span className="text-gray-500 sm:text-sm"><MdKey /></span>
              </div>
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                id="confirmPassword"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                className="block w-full rounded-md border-0 py-1.5 ps-12 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Re-Enter Your password"
              />
              <span className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer" onClick={toggleConfirmPasswordVisibility}>
                {showConfirmPassword ? <MdVisibilityOff /> : <MdVisibility />}
              </span>
            </div>
            {passwordError && <div className="text-red-500 text-sm mt-1">{passwordError}</div>}
            <button className='bg-[--three-color] hover:bg-white hover:text-[--three-color] outline outline-[--three-color] p-2 px-5 rounded-md text-sm text-white uppercase mt-5' onClick={handleSubmit}>Submit</button>
          </div>
          <div><NavLink to="/register" className="text-sm text-[--three-color] hover:text-black">Back To Login</NavLink></div>
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;
