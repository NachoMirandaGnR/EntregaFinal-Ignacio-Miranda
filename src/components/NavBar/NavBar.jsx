import CartWidget from "../CartWidget/CartWidget";
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <Link to="/">
        <h2>Coder Vintage Electric | Vintage Guitars</h2>
      </Link>
      <div>
        <button>Guitarras Electricas</button>
        <button>Guitarras Acusticas</button>
        <button>Amplificadores</button>
        <button>Accesorios</button>
      </div>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
