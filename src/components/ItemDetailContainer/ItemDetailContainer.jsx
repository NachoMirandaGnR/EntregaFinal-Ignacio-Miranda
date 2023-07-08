import "./ItemDetailContainer.css";
import { useState, useEffect } from "react";
import { getProductById } from "../../asyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const { itemId } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await getProductById(itemId);
        setProduct(response);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProduct();
  }, [itemId]);

  return (
    <div className="ItemDetailContainer">
      {product ? <ItemDetail {...product} /> : <p>Loading...</p>}
    </div>
  );
};

export default ItemDetailContainer;
