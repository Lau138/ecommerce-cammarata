import ItemCount from "../ItemListContainer/ItemCount";
import ItemList from "../ItemListContainer/ItemList";
import { useEffect, useState } from "react";
import data from "../shoes-data";

const ItemListContainer = () => {


  const [items, setItems] = useState([]);

  const delay = new Promise((resolve) => {
    setTimeout(() => {
      resolve(data)
    }, 2000)
  })

  useEffect(() => {
    delay.then((result) => {
      setItems(result);
    })
  }, []);

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