import { useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [quantity, setQuantity] = useState(initial);

  const handleIncrement = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    onAdd(quantity);
  };

  return (
    <div className="Counter">
      <div className="Controls">
        <button className="Button" onClick={handleDecrement}>
          -
        </button>
        <h4 className="Number">{quantity}</h4>
        <button className="Button" onClick={handleIncrement}>
          +
        </button>
      </div>

      <div>
        <button
          className="Button"
          onClick={handleAddToCart}
          disabled={stock === 0}
        >
          Agregar al Carrito
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
