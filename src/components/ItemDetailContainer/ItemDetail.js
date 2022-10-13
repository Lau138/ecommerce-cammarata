import ItemCount from "./ItemCount"
import { useState, useContext} from "react"
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({ itemDetail }) => {
    const {addItem, getQuantity} = useContext(CartContext)

    const [comprar, setComprar] = useState(0)

    const onAdd = (contador) => {
        setComprar(contador)
        addItem(itemDetail, contador);
    }
    
    return (
        <>
            <div className="itemDetail">
                <div className="itemDetail_img"><img src={itemDetail.img}></img></div>
                <div className="itemDetail_detail">
                    <h2>{itemDetail.title}</h2>
                    <p>${itemDetail.price}</p>
                    <ItemCount stock={itemDetail.stock-getQuantity(itemDetail.id)} onAdd={onAdd} />
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