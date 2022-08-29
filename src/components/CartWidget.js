import logo from "../img/carrito.png";
const CartWidget = () => {
  return (
    <div className="logo-carrito">
        <div><img src={logo}></img></div>
        <p>0</p>
    </div>
  )
}

export default CartWidget