import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <Link to="/">
        <h2>Coder Vintage Electric | Vintage Guitars</h2>
      </Link>
      <div>
        <NavLink to="/categories/electric-guitars" activeClassName="active">
          <button>Guitarras Electricas</button>
        </NavLink>
        <NavLink to="/categories/acoustic-guitars" activeClassName="active">
          <button>Guitarras Acusticas</button>
        </NavLink>
        <NavLink to="/categories/amplifiers" activeClassName="active">
          <button>Amplificadores</button>
        </NavLink>
        <NavLink to="/categories/accessories" activeClassName="active">
          <button>Accesorios</button>
        </NavLink>
      </div>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
