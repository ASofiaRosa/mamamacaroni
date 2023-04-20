import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";

export default function Authentication() {
  const login = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login?.login(email, password);
  };

  return (
    <div className="authentication">
      <div className="authenticationImage">
        <img
          src="https://res.cloudinary.com/dup0sa10r/image/upload/v1677101488/mamamacaroni/brigitte-tohm-irRhPKPqP9Y-unsplash_brq6x5.jpg"
          alt="macarons box"
        ></img>
      </div>
      <form className="authenticationInput" onSubmit={submit}>
        <h2>Log in</h2>
        <div className="email">
          <label>Email:</label>
          <br></br>
          <input
            type="text"
            id="email"
            name="email"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setEmail(e.target.value);
            }}
          ></input>
        </div>
        <div className="password">
          <label>Password:</label>
          <br></br>
          <input
            type="text"
            id="password"
            name="password"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setPassword(e.target.value);
            }}
          ></input>
        </div>
        <div className="buttonAndRedirect">
          <input type="submit" value="Submit" className="submit"></input>
          <h5>
            You do not yet have an account?
            <NavLink className="signUp" to={"/signUp"}>
              Sign up
            </NavLink>
          </h5>
        </div>
      </form>
    </div>
  );
}
