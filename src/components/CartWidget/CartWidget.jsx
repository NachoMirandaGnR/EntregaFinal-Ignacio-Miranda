import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext);

  return (
    <Link to="/cart" className="CartWidget">
      {totalQuantity > 0 && (
        <span className="CartWidget__quantity">{totalQuantity}</span>
      )}
      <i className="fas fa-shopping-cart"></i>
    </Link>
  );
};

export default CartWidget;
