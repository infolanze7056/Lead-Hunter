import React from "react";
import { NavLink } from "react-router-dom";

function Payment() {

  return (
    <div className="font-family">
      <div className="px-5 py-20">
        <div className="max-w-sm border mx-auto text-center py-20 rounded-md shadow">
          <div>Payment Sucessfull</div>
          <div><NavLink to="/register" className="text-sm text-[--three-color] hover:text-black">Back To Login</NavLink></div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
