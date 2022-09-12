import ItemCount from "../ItemListContainer/ItemCount";
import ItemList from "../ItemListContainer/ItemList";
import { useEffect, useState } from "react";
import data from "../data";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {

  const { productosId } = useParams()

  const [items, setItems] = useState([]);

  const delay = new Promise((resolve) => {
    setTimeout(() => {
      resolve(data)
    }, 2000)
  })

  useEffect(() => {
    delay.then(resultado => {
      if (productosId === undefined) {
        setItems(resultado)
      } else {
        const newProductos = resultado.filter(items => items.categoria === productosId);
        setItems(newProductos)
      }
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