import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <nav>
      <h2>Coder Vintage Electric | Vintage Guitars</h2>
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
