import Item from "../components/Item"

const ItemList = ({ items }) => {
    return (
        <div className="ItemList">
            {
                items.map((item) => (
                    <Item key={item.id} title={item.title} price={item.price} img={item.img} />
                )
                )
            }
        </div>
    )
}

export default ItemList