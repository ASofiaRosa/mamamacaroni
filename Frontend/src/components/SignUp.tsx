import React from "react";
import { NavLink } from "react-router-dom";

export default function SignUp() {
  return (
    <div className="authentication">
      <div className="authenticationImage">
        <img
          src="https://res.cloudinary.com/dup0sa10r/image/upload/v1677101488/mamamacaroni/brigitte-tohm-irRhPKPqP9Y-unsplash_brq6x5.jpg"
          alt="macarons box"
        ></img>
      </div>
      <div className="authenticationInput">
        <h2>Sign Up</h2>
        <div className="name">
          <label>Name:</label>
          <br></br>
          <input type="text" id="name" name="name"></input>
        </div>
        <div className="email">
          <label>Email:</label>
          <br></br>
          <input type="text" id="email" name="email"></input>
        </div>
        <div className="password">
          <label>Password:</label>
          <br></br>
          <input type="text" id="password" name="password"></input>
        </div>
        <div className="buttonAndRedirect">
          <input type="submit" value="Submit" className="submit"></input>
        </div>
      </div>
    </div>
  );
}
