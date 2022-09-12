import ItemCount from "../ItemListContainer/ItemCount"

const ItemDetail = ({ itemDetail }) => {

    let talle
    if (itemDetail.categoria === "SNKRS") {
        talle = <select>
            <option disabled>-- Seleccionar Talle --</option>
            <option value="t39">39ars</option>
            <option value="t40">40ars</option>
            <option value="t41">41ars</option>
            <option value="t42">42ars</option>
            <option value="t43">43ars</option>
            <option value="t44">44ars</option>
            <option value="t45">45ars</option>
        </select>
    } else if (itemDetail.categoria === "remeras"){
        talle = <select>
            <option disabled>-- Seleccionar Talle --</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
        </select>
    }

    return (
        <>
            <div className="itemDetail">
                <div className="itemDetail_img"><img src={itemDetail.img}></img></div>
                <div className="itemDetail_detail">
                    <h4>Jordan</h4>
                    <h2>{itemDetail.title}</h2>
                    <p>{itemDetail.price}</p>
                    {talle}
                    <ItemCount stock={itemDetail.stock} />
                    <button>AGREGAR AL CARRITO</button>
                </div> 
            </div>
        </>
    )
}

export default ItemDetail