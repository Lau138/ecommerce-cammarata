import React, { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'
import "../style.css";
import { Link } from "react-router-dom"
import { db } from "../../utils/firebase"
import { collection, addDoc, updateDoc, doc } from 'firebase/firestore';

const CartContainer = () => {
  const { productCartList, removeItem, clear, getTotal } = useContext(CartContext);
  const [idOrder, setIdOrder] = useState("")

  const sendOrder = (e) => {
    e.preventDefault()

    if (e.target[0].value !== "" && e.target[1].value !== "" && e.target[2].value !== "") {
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


      productCartList.map((item) => {
        const orderDoc = doc(db, "items", item.id);
        updateDoc(orderDoc, { stock: item.stock - item.quantity })
      })

      addDoc(queryRef, order).then(response => {
        setIdOrder(response.id);
        clear()
      })
    }
  }

  return (
    <div className='container'>
      {idOrder ?
        <p>su orden fue creada exitosamente {idOrder}</p>
        :
        <div>
          {
            productCartList.length > 0 ?
              <div className='itemCartContainer'>
                <div className='itemCartContainer-items'>
                  {productCartList.map(item => (
                    <div className='itemCart'>
                      <div className='itemCart__img'>
                        <img src={item.img} />
                      </div>
                      <div className='itemCart-item itemCart-title'>{item.title}</div>
                      <div className='itemCart-item itemCart-price'>{item.price}</div>
                      <div className='itemCart-item itemCart-quantity'>{item.quantity}</div>
                      <div className='itemCart-item itemCart-subtotal'>{item.price * item.quantity}</div>
                      <button onClick={() => removeItem(item.id)}>X</button>
                    </div>
                  ))}
                  <button onClick={() => clear()}>Vaciar Carrito</button>
                </div>
                <form onSubmit={sendOrder}>
                  <legend>Resumen de Compra</legend>
                  <label>Nombre:</label>
                  <input type="text" />
                  <label>Telefono:</label>
                  <input type="text" />
                  <label>Email:</label>
                  <input type="email" />
                  <div className='realizarCompra'>
                    <p>Total= {getTotal()}</p>
                    <button type='sumbit'>Enviar Orden</button>
                  </div>
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