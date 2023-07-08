import { db } from "./firebaseConfig";

export const getProductsFromFirestore = () => {
  return db
    .collection("items")
    .get()
    .then((querySnapshot) => {
      const products = [];
      querySnapshot.forEach((doc) => {
        products.push(doc.data());
      });
      return products;
    });
};
