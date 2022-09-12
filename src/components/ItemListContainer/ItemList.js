import Item from "../ItemListContainer/Item"

const ItemList = ({ items }) => {
    return (
        <div className="ItemList">
            {
                items.map((item) => (
                    <Item key={item.id} id={item.id} title={item.title} price={item.price} img={item.img} categoria={item.categoria} />
                )
                )
            }
        </div>
    )
}

export default ItemList