
const Item = ({title,price,img}) => {
  return (
    <div className="item">
        <img src={img} />
        <p>{title}</p>
        <h3>Precio: {price}</h3>
        <button>Ver mas detalles</button>
    </div>
  )
}

export default Item