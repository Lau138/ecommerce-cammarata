import ItemCount from "./ItemCount"
import { useState, useContext, useEffect } from "react"
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({ itemDetail }) => {
    const {addItem} = useContext(CartContext)

    const [comprar, setComprar] = useState(0)

    const onAdd = (contador) => {
        setComprar(contador)
        addItem(itemDetail, contador);
        itemDetail.stock = itemDetail.stock - contador;
    }

    return (
        <>
            <div className="itemDetail">
                <div className="itemDetail_img"><img src={itemDetail.img}></img></div>
                <div className="itemDetail_detail">
                    <h2>{itemDetail.title}</h2>
                    <p>${itemDetail.price}</p>
                    <ItemCount stock={itemDetail.stock} onAdd={onAdd} />
                    {
                        comprar>0 &&
                        <div className="productoAgregadoMensaje">
                            Su producto fue agregado al carrito
                        </div>
                    }
                </div>
            </div>
        </>
    )
}

export default ItemDetail