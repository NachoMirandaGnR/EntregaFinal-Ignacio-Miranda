import { createContext, useState } from "react";

export const CartContext = createContext({
  cart: [],
  totalQuantity: 0,
});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0);

  const addItem = (item, quantity) => {
    if (isInCart(item.id)) {
      const updatedCart = cart.map((prod) => {
        if (prod.id === item.id) {
          return { ...prod, quantity: prod.quantity + quantity };
        }
        return prod;
      });
      setCart(updatedCart);
    } else {
      setCart((prev) => [...prev, { ...item, quantity }]);
    }
    setTotalQuantity((prev) => prev + quantity);
  };

  const removeItem = (itemId) => {
    const removedItem = cart.find((prod) => prod.id === itemId);
    if (removedItem) {
      setCart((prev) => prev.filter((prod) => prod.id !== itemId));
      setTotalQuantity((prev) => prev - removedItem.quantity);
    }
  };

  const clearCart = () => {
    setCart([]);
    setTotalQuantity(0);
  };

  const isInCart = (itemId) => {
    return cart.some((prod) => prod.id === itemId);
  };

  return (
    <CartContext.Provider
      value={{ cart, totalQuantity, addItem, removeItem, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
