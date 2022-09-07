import {useState} from "react";

const ItemCount = ({producto, inicial, stock}) => {
    const [contador, setContador] = useState(inicial);
    const sumarContador = () =>{
        if (contador<stock){
            setContador(contador+1)
        }
    }
    const restarContador = () =>{
        if (contador>1){
            setContador(contador-1)
        }
    }
  return (
    <>
    <div className="item">
        <h1>{producto}</h1>
        <h3>Stock: {stock}</h3>
        <div className="item__contador">
            <button onClick={restarContador}>-</button>
            <p>{contador}</p>
            <button onClick={sumarContador}>+</button>
        </div>
        <button>Agregar al carrito:</button>
    </div>
    </>
  )
}

export default ItemCount