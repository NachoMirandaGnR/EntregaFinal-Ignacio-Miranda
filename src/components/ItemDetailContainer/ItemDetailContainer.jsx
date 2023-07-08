import { useContext, useEffect, useState } from "react";
import { FirebaseContext } from "../../firebase";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const { firebase } = useContext(FirebaseContext);
  const db = firebase.firestore();

  const [product, setProduct] = useState(null);
  const { itemId } = useParams();

  useEffect(() => {
    const getProductFromFirestore = () => {
      db.collection("items")
        .doc(itemId)
        .get()
        .then((doc) => {
          if (doc.exists) {
            setProduct({ id: doc.id, ...doc.data() });
          } else {
            console.error("Product not found");
          }
        })
        .catch((error) => {
          console.error("Error getting product: ", error);
        });
    };

    getProductFromFirestore();
  }, [itemId, db]);

  return (
    <div className="ItemDetailContainer">
      {product ? <ItemDetail {...product} /> : <p>Loading...</p>}
    </div>
  );
};

export default ItemDetailContainer;
