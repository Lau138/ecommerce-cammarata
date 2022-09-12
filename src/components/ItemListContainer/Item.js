import { Link } from "react-router-dom";

const Item = ({ title, price, img, id }) => {
  const navTitle = title.replace(/ /g, "-");


  return (
    <Link to={`/item/${id}`}>
      <div className="item">
        <div className="item_img">
          <img src={img} />
        </div>
        <div className="item_texto">
          <p>{title}</p>
          <h3>Precio: {price}</h3>
        </div>
      </div>
    </Link>
  )
}

export default Item