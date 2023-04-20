import { useContext } from "react";
import { MdShoppingBasket } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";

export default function Navbar() {
  const user = useContext(AuthContext);

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
