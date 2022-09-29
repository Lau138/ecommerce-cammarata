import React, { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'
import "../style.css";
import { Link } from "react-router-dom"
import { db } from "../../utils/firebase"
import { collection, addDoc } from 'firebase/firestore';

const CartContainer = () => {
  const { productCartList, removeItem, clear, getTotal } = useContext(CartContext);
  const [idOrder, setIdOrder] = useState("")

  const sendOrder = (e) => {
    e.preventDefault()

    const order = {
      buyer: {
        name: e.target[0].value,
        phone: e.target[1].value,
        email: e.target[2].value,
      },
      items: productCartList,
      total: getTotal()
    }

    const queryRef = collection(db, "orders");

    addDoc(queryRef, order).then(response => {
      setIdOrder(response.id);
      clear()
    })
  }

  return (
    <div className='itemCartContainer'>
      {idOrder ?
        <p>su orden fue creada exitosamente {idOrder}</p>
        :
        <div>
          {
            productCartList.length > 0 ?
              <div>
                {productCartList.map(item => (
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
                ))}
                <p>Total= {getTotal()}</p>
                <button onClick={() => clear()}>Vaciar Carrito</button>
                <form onSubmit={sendOrder}>
                  <label>Nombre:</label>
                  <input type="text" />
                  <label>Telefono:</label>
                  <input type="text" />
                  <label>Email:</label>
                  <input type="email" />
                  <button type='sumbit'>Enviar Orden</button>
                </form>
              </div>
              :
              <>
                <div className='cartVacio'>
                  <div>Tu carrito esta vacio</div>
                  <Link to="/">
                    <button>Seguir Comprando</button>
                  </Link>
                </div>
              </>
          }
        </div>
      }
    </div>
  )
}

export default CartContainer