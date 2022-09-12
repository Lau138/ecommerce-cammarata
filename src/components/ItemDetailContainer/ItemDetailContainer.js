import { useState, useEffect } from "react";
import data from "../data";
import ItemDetail from "../ItemDetailContainer/ItemDetail"
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {

  const { itemID } = useParams()

  const [itemDetail, setItemDetail] = useState([])

  const getItem = (id) => {
    return new Promise((resolve) => {
      const producto = data.find(item => item.id === parseInt(id))
      resolve(producto)
    })
  }

  useEffect(() => {
    const getProducto = async () => {
      const producto = await getItem(itemID);
      setItemDetail(producto);
    }
    getProducto();
  }, [itemID]);


  return (
    <>
        <div className="ItemListContainer">
          <ItemDetail itemDetail={itemDetail} />
        </div>
    </>
  )
}

export default ItemDetailContainer