import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import "../style.css";
import { Link } from "react-router-dom"

const CartContainer = () => {
  const { productCartList, removeItem, clear, getTotal } = useContext(CartContext);

  if (productCartList.length > 0) {
    return (
      <div className='itemCartContainer'>
        {productCartList.map(item => (
          <>
            <div className='itemCart'>
              <div className='itemCart__img'>
                <img src={item.img} />
              </div>
              <p>{item.title}</p>
              <p>{item.price}</p>
              <p>{item.quantity}</p>
              <p>{item.price * item.quantity}</p>
              <button onClick={() => removeItem(item.id)}>X</button>
            </div>
          </>
        ))}
        <p>Total= {getTotal()}</p>
        <button>Finalizar Compra</button>
        <button onClick={() => clear()}>Eliminar Todo</button>
      </div>
    )
  } else {
    return (
      <>
        <div className='cartVacio'>
          <div>Tu carrito esta vacio</div>
          <Link to="/">
            <button>Seguir Comprando</button>
          </Link>
        </div>
      </>
    )
  }

}

export default CartContainer