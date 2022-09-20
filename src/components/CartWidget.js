import logo from "../img/carrito.png";
import { Link } from "react-router-dom"
import React, { useContext } from 'react'
import { CartContext} from "../context/CartContext";

const CartWidget = () => {
  const { productCartList } = useContext(CartContext);

  return (
    <Link to="/cart">
      <div className="logo-carrito">
        <div><img src={logo}></img></div>
        <p>{productCartList.length}</p>
      </div>
    </Link>
  )
}

export default CartWidget