import { useContext, useState } from "react";
import { FirebaseContext } from "../../firebase";
import { CartContext } from "../../context/CartContext";

import CheckoutForm from "../CheckoutForm/CheckoutForm";

const Checkout = () => {
  const { firebase } = useContext(FirebaseContext);
  const db = firebase.firestore();

  const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState("");

  const { cart, total, clearCart } = useContext(CartContext);

  const createOrder = async ({ name, phone, email }) => {
    setLoading(true);

    try {
      // Create a new order document in Firestore
      const orderRef = await db.collection("orders").add({
        name,
        phone,
        email,
        items: cart,
        total,
        date: firebase.firestore.FieldValue.serverTimestamp(),
        status: "generada",
      });

      setLoading(false);
      setOrderId(orderRef.id);
      clearCart();
    } catch (error) {
      console.error("Error creating order: ", error);
    }
  };

  if (loading) {
    return <h1>Se está generando su orden...</h1>;
  }

  if (orderId) {
    return <h1>El id de su orden es: {orderId}</h1>;
  }

  return (
    <div>
      <h1>Checkout</h1>
      <CheckoutForm onConfirm={createOrder} />
    </div>
  );
};

export default Checkout;
