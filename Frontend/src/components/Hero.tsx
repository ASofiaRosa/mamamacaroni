import React from "react";
import { NavLink } from "react-router-dom";

export default function Hero() {
  return (
    <div className="HeroContainer">
      <div className="HeroTextContainer">
        <h2>Our freshly baked macarons are waiting for you</h2>
        <NavLink to={"/order"}>
          <button>Order Now</button>
        </NavLink>
      </div>
    </div>
  );
}
