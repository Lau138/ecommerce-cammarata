import { useState, useEffect } from "react";
import data from "../data";
import ItemDetail from "../ItemDetailContainer/ItemDetail"
import { useParams } from "react-router-dom";
import { db } from "../../utils/firebase";
import { doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {

  const { itemID } = useParams()

  const [itemDetail, setItemDetail] = useState([])

  useEffect(() => {
    const getProducto = async () => {
      const queryRef = doc(db, "items", itemID);
      const response = await getDoc(queryRef);
      const newItem = {
        id: response.id,
        ...response.data()
      }
      setItemDetail(newItem)
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