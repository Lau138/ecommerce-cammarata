import { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const ItemCount = ({ stock, onAdd }) => {
    const value = useContext(CartContext)
    const [contador, setContador] = useState(0);

    const sumarContador = () => {
        if (contador < stock) {
            setContador(contador + 1)
        }
    }
    const restarContador = () => {
        if (contador > 1) {
            setContador(contador - 1)
        }
    }
    return (
        <>
            <div>
                <h3>Stock: {stock}</h3>
                <div className="item__contador">
                    <button onClick={restarContador}>-</button>
                    <p>{contador}</p>
                    <button onClick={sumarContador}>+</button>
                </div>
                <Link to="/cart">
                    <button onClick={() => onAdd(contador)}>Comprar</button>
                </Link>
            </div>
        </>
    )
}

export default ItemCount