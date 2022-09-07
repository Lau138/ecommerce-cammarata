
const ItemDetail = ({ itemDetail }) => {
    return (
        <>
            <div className="itemDetail">
                <div className="itemDetail_img"><img src={itemDetail[0].img}></img></div>
                <div className="itemDetail_detail">
                    <h4>Jordan</h4>
                    <h2>Jordan 1 Union Los Angeles</h2>
                    <p>$1600</p>
                    <select>
                        <option disabled>-- Seleccionar Talle --</option>
                        <option value="t39">39ars</option>
                        <option value="t40">40ars</option>
                        <option value="t41">41ars</option>
                        <option value="t42">42ars</option>
                        <option value="t43">43ars</option>
                        <option value="t44">44ars</option>
                        <option value="t45">45ars</option>
                    </select>
                </div>
            </div>
        </>
    )
}

export default ItemDetail