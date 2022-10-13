import ItemList from "../ItemListContainer/ItemList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../utils/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

const ItemListContainer = () => {

  const { productosId } = useParams()

  const [items, setItems] = useState([]);

  useEffect(() => {
    const queryRef = productosId ? query(collection(db, "items"), where("categoria", "==", productosId)) : collection(db, "items");
      getDocs(queryRef).then(response => {
        const results = response.docs.map(item => {
          const newItem = {
            id: item.id,
            ...item.data(),
          }
          return newItem
        });
        setItems(results)
      })
  }, [productosId])

  return (
    <>
      {
        items.length > 0 ? (
          <div className="ItemListContainer">
            <ItemList items={items} />
          </div>) : (
          <div>Cargando...</div>
        )
      }
    </>
  )
}

export default ItemListContainer