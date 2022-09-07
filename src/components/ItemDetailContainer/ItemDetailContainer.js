import {useState, useEffect} from "react";
import data from "../shoes-data";
import ItemDetail from "../ItemDetailContainer/ItemDetail"

const ItemDetailContainer = () => {

  const [itemDetail, setItemDetail] = useState([])

  const delay = new Promise((resolve) => {
    setTimeout(()=>{
      resolve(data)
    },2000)
  })

  useEffect(()=>{
    delay.then((result)=>{
      setItemDetail(result);
    })
  }, []);


  return (
    <>
      {
        itemDetail.length > 0 ? (
          <div className="ItemListContainer">
            <ItemDetail itemDetail={itemDetail} />
          </div>) : (
            <div></div>
          ) 
    }
    </>
  )
}

export default ItemDetailContainer