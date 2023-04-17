import React from "react";
import { MdShoppingBasket } from "react-icons/md";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      <h1>MamaMacaroni</h1>
      <div className="navbarRight">
        <NavLink to={"/logIn"}>
          <button>My account</button>
        </NavLink>
        <MdShoppingBasket size={30} />
        <div className="cartCount">1</div>
      </div>
    </div>
  );
}
