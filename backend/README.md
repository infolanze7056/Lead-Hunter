npm install
nodemon server.js

1) Register API (create new email password to signup)
   http://localhost:5000/api/auth/register
   {
    "name": "manish", 
    "email": "nishant@gmail.com",
    "phonenumber": "9876343215",
    "password": "123456"
    }

  2)Login API
  http://localhost:5000/api/auth/login
  {
    "email": "nishant@gmail.com",
    "password": "123456"
    }
