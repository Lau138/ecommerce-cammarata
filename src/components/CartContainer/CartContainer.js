import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import "../style.css";

const CartContainer = () => {
  const { productCartList, removeItem, clear } = useContext(CartContext);

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
      <button onClick={()=>clear()}>Eliminar Todo</button>
    </div>
  )
}

export default CartContainer