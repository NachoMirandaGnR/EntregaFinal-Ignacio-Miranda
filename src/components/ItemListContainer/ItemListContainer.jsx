import { useContext, useEffect, useState } from "react";
import { FirebaseContext } from "../../firebase";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ greeting }) => {
  const { firebase } = useContext(FirebaseContext);
  const db = firebase.firestore();

  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const getProductsFromFirestore = () => {
      const collection = categoryId
        ? db.collection("items").where("category", "==", categoryId)
        : db.collection("items");
      collection
        .get()
        .then((querySnapshot) => {
          const productsData = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setProducts(productsData);
        })
        .catch((error) => {
          console.error("Error getting products: ", error);
        });
    };

    getProductsFromFirestore();
  }, [categoryId, db]);

  return (
    <div>
      <h1>{greeting}</h1>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;
