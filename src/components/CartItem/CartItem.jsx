import "./CartItem.css";

import React from "react";

const CartItem = ({ id, name, img, price, quantity }) => {
  return (
    <div className="CartItem">
      <div className="CartItemInfo">
        <h3 className="CartItemName">{name}</h3>
        <p className="CartItemPrice">${price}</p>
      </div>
      <div className="CartItemQuantity">
        <p>Cantidad: {quantity}</p>
      </div>
    </div>
  );
};

export default CartItem;
