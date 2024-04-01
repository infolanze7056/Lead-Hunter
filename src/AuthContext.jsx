// AuthContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if the user is already logged in (e.g., token exists in localStorage)
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const login = () => {
    // Perform login logic (e.g., authenticate user with backend, store token)
    // Update isLoggedIn state accordingly
    setIsLoggedIn(true);
    localStorage.setItem('token', 'example_token'); // Example: Store token in localStorage
  };

  const logout = () => {
    // Perform logout logic (e.g., clear authentication token)
    // Update isLoggedIn state accordingly
    setIsLoggedIn(false);
    localStorage.removeItem('token'); // Remove token from localStorage on logout
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
